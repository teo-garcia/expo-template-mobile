import { useState } from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'

import { useHealth } from '~/features/health/use-health'

// Matches the Tailwind palette the web templates use for the same indicator:
// yellow-500 / green-500 / red-500.
const HEALTH_STATUS_COLOR: Record<string, string> = {
  degraded: '#eab308',
  down: '#ef4444',
  ok: '#22c55e',
}

export function HealthStatus() {
  const { data, isPending, isError } = useHealth()
  const [expanded, setExpanded] = useState(false)

  const statusLabel = isPending
    ? 'CHECKING'
    : isError || !data
      ? 'UNREACHABLE'
      : data.status.toUpperCase()
  const dotColor = HEALTH_STATUS_COLOR[data?.status ?? 'down'] ?? '#687076'

  // Pinned to the top-left edge, mirroring the badge placement on web. It
  // collapses to a dot and expands the label on tap, since native has no
  // hover. The token names differ from the web templates because this app
  // defines its own palette (surface/border/foreground) in global.css.
  return (
    <Pressable
      accessibilityLiveRegion='polite'
      accessibilityRole='button'
      accessibilityState={{ expanded }}
      onPress={() => setExpanded((value) => !value)}
      className='absolute left-4 top-16 flex-row items-center rounded-full border border-border bg-surface px-1.5 py-1.5'
    >
      {isPending ? (
        <ActivityIndicator size='small' />
      ) : (
        <View
          className='h-2.5 w-2.5 rounded-full'
          style={{ backgroundColor: dotColor }}
        />
      )}
      {expanded ? (
        <Text className='ml-2 text-xs font-medium tracking-wide text-foreground'>
          {statusLabel}
        </Text>
      ) : null}
    </Pressable>
  )
}
