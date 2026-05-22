import shared from '@teo-garcia/eslint-config-shared'
import sharedReactNative from '@teo-garcia/eslint-config-shared/react-native'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...shared,
  ...sharedReactNative,
  {
    ignores: [
      '.expo/**',
      'android/**',
      'ios/**',
      'dist/**',
      'node_modules/**',
      // CommonJS configs required by Metro, Babel, and Tailwind.
      'babel.config.js',
      'metro.config.js',
    ],
  },
])
