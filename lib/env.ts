type AppEnvironment = 'development' | 'production' | 'test'

const getAppEnvironment = (): AppEnvironment => {
  const value = process.env['NODE_ENV']

  if (value === 'development' || value === 'production' || value === 'test') {
    return value
  }

  return 'development'
}

const getRequiredUrl = (name: string, value: unknown): string => {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`${name} must be a valid URL`)
  }

  try {
    return new URL(value).toString()
  } catch {
    throw new Error(`${name} must be a valid URL`)
  }
}

const appEnv = getAppEnvironment()
const apiBaseUrl = getRequiredUrl(
  'EXPO_PUBLIC_API_BASE_URL',
  process.env.EXPO_PUBLIC_API_BASE_URL
)

export const env = {
  appEnv,
  apiBaseUrl,
  isDevelopment: appEnv === 'development',
  isProduction: appEnv === 'production',
  isServer: false,
  isDev: appEnv === 'development',
  isProd: appEnv === 'production',
} as const
