import '../global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { queryClient } from '~/lib/query-client'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

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
          <Stack.Screen name='index' />
          <Stack.Screen name='+not-found' />
        </Stack>
        <StatusBar style='auto' />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
