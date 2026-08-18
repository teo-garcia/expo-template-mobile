import { Stack } from 'expo-router'

import { RouteNotFoundState } from '~/components/route-state/route-state'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'RNT | Screen not found' }} />
      <RouteNotFoundState />
    </>
  )
}
