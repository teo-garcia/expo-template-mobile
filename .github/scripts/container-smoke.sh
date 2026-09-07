#!/usr/bin/env bash

set -euo pipefail

image=${1:?container image is required}
container=production-smoke

# Invoked by the EXIT trap.
# shellcheck disable=SC2329
cleanup() {
  docker rm --force "$container" 2>/dev/null || true
}

trap cleanup EXIT

docker run --detach --name "$container" \
  --publish 127.0.0.1:43119:8080 \
  "$image"

for _ in $(seq 1 60); do
  health=$(docker inspect --format '{{.State.Health.Status}}' "$container")
  if [[ $health == healthy ]] &&
    curl --fail --silent http://127.0.0.1:43119/ >/dev/null; then
    exit 0
  fi
  sleep 1
done

docker logs "$container"
exit 1
