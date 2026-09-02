import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, type RenderOptions } from '@testing-library/react-native'
import type { ReactElement } from 'react'
import React from 'react'

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { gcTime: Infinity, retry: false, staleTime: 0 },
      mutations: { retry: false },
    },
  })
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={testQueryClient}>
        {children}
      </QueryClientProvider>
    )
  }
}

function customRender(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: createWrapper(), ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
