import '../global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  RouteLoadingState,
  RouteState,
  RouteStateButton,
} from '~/components/route-state/route-state'
import { HealthStatus } from '~/features/health/health-status'
import { queryClient } from '~/lib/query-client'

const APP_SHORT_NAME = 'RNT'

void SplashScreen.preventAutoHideAsync()

export function ErrorBoundary({
  error,
  retry,
}: Readonly<{ error: Error; retry: () => void }>) {
  return (
    <GestureHandlerRootView className='flex-1'>
      <RouteState
        actions={<RouteStateButton onPress={retry}>Try again</RouteStateButton>}
        description={error.message || 'The application shell failed to render.'}
        title='Something went wrong'
        variant='error'
      />
    </GestureHandlerRootView>
  )
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function prepareApplication() {
      await SplashScreen.hideAsync()
      setIsReady(true)
    }

    void prepareApplication()
  }, [])

  if (!isReady)
    return (
      <GestureHandlerRootView className='flex-1'>
        <RouteLoadingState />
      </GestureHandlerRootView>
    )

  return (
    <GestureHandlerRootView className='flex-1'>
      <QueryClientProvider client={queryClient}>
        {/*
         * Theme: automatically syncs with the device system setting (light/dark).
         * No manual toggle needed — useColorScheme() is reactive to OS changes.
         * All ThemedView / ThemedText components update instantly when the user
         * switches in phone settings.
         *
         * To add tab navigation:
         * 1. Create app/(tabs)/ and move app/index.tsx → app/(tabs)/index.tsx
         * 2. Add app/(tabs)/_layout.tsx with a <Tabs> navigator
         * 3. Use components/haptic-tab and components/tab-bar-background —
         *    they are already set up for this. Use lucide-react-native for icons
         * 4. Replace the <Stack.Screen name='index' /> below with:
         *    <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
         */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='index'
            options={{ title: `${APP_SHORT_NAME} | Home` }}
          />
          <Stack.Screen name='+not-found' />
        </Stack>
        <HealthStatus />
        <StatusBar style='auto' />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
