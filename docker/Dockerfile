# syntax=docker/dockerfile:1

# ─── Stage 1: deps ───────────────────────────────────────────────────────────
FROM node:24-alpine AS deps
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN CI=true HUSKY=0 pnpm install --frozen-lockfile

# ─── Stage 2: builder ────────────────────────────────────────────────────────
FROM node:24-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Expo replaces public environment variables while exporting the static bundle.
ARG EXPO_PUBLIC_API_BASE_URL=http://localhost:3000
ENV EXPO_PUBLIC_API_BASE_URL=${EXPO_PUBLIC_API_BASE_URL}
RUN pnpm build

# ─── Stage 3: production ─────────────────────────────────────────────────────
FROM nginx:stable-alpine AS production
# Run as non-root
RUN addgroup -g 1001 -S appgroup && adduser -u 1001 -S appuser -G appgroup
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
RUN chown -R appuser:appgroup /usr/share/nginx/html \
    && chown -R appuser:appgroup /var/cache/nginx \
    && touch /var/run/nginx.pid \
    && chown -R appuser:appgroup /var/run/nginx.pid
USER appuser
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1:8080/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
