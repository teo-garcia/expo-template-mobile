import { Link } from 'expo-router'
import { AlertTriangle, RefreshCw, SearchX } from 'lucide-react-native'
import type { ReactNode } from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'

import { Colors } from '~/lib/constants/colors'
import { useColorScheme } from '~/lib/hooks/use-color-scheme'

type RouteStateVariant = 'error' | 'loading' | 'not-found'

interface RouteStateProperties {
  actions?: ReactNode
  description: string
  title: string
  variant: RouteStateVariant
}

export function RouteState(properties: Readonly<RouteStateProperties>) {
  const { actions, description, title, variant } = properties
  const scheme = useColorScheme()
  const color = Colors[scheme].icon
  const isLoading = variant === 'loading'
  const Icon = variant === 'error' ? AlertTriangle : SearchX

  return (
    <View
      accessibilityLiveRegion={isLoading ? 'polite' : undefined}
      className='flex-1 items-center justify-center gap-8 bg-background px-6 py-16'
    >
      {isLoading ? (
        <ActivityIndicator
          accessibilityLabel='Loading'
          color={Colors[scheme].tint}
          size='large'
        />
      ) : (
        <Icon
          accessibilityElementsHidden
          color={color}
          importantForAccessibility='no-hide-descendants'
          size={80}
          strokeWidth={1.5}
        />
      )}
      <View className='max-w-xl items-center gap-3'>
        <Text className='text-center text-[40px] font-semibold leading-[48px] text-foreground'>
          {title}
        </Text>
        <Text className='text-center text-base leading-7 text-icon'>
          {description}
        </Text>
      </View>
      {actions ? <View className='items-center gap-3'>{actions}</View> : null}
    </View>
  )
}

export function RouteStateLink({
  children,
  href,
}: Readonly<{ children: ReactNode; href: '/' }>) {
  return (
    <Link
      accessibilityRole='link'
      className='rounded-md bg-foreground px-4 py-3'
      href={href}
    >
      <Text className='text-sm font-medium text-background'>{children}</Text>
    </Link>
  )
}

export function RouteStateButton({
  children,
  onPress,
}: Readonly<{ children: ReactNode; onPress: () => void }>) {
  const scheme = useColorScheme()

  return (
    <Pressable
      accessibilityRole='button'
      className='flex-row items-center gap-2 rounded-md bg-foreground px-4 py-3'
      onPress={onPress}
    >
      <RefreshCw color={Colors[scheme].background} size={16} />
      <Text className='text-sm font-medium text-background'>{children}</Text>
    </Pressable>
  )
}

export function RouteLoadingState() {
  return (
    <RouteState
      description='Preparing the next screen with the latest data.'
      title='Loading'
      variant='loading'
    />
  )
}

export function RouteNotFoundState() {
  return (
    <RouteState
      actions={<RouteStateLink href='/'>Return home</RouteStateLink>}
      description='The screen you are looking for does not exist.'
      title='Screen not found'
      variant='not-found'
    />
  )
}
