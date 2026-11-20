import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { test } from 'node:test'

const require = createRequire(import.meta.url)
const toolingRequire = createRequire(
  new URL('../tools/eas/package.json', import.meta.url)
)
const easRequire = createRequire(toolingRequire.resolve('eas-cli/package.json'))
const expoRequire = createRequire(require.resolve('expo/package.json'))
const cliRequire = createRequire(expoRequire.resolve('@expo/cli/package.json'))
const routerRequire = createRequire(require.resolve('expo-router/package.json'))

test('patched URI decoding preserves query-string parsing and encoding', () => {
  const queryString = routerRequire('query-string')
  assert.equal(queryString.parse('name=hello%20world').name, 'hello world')
  assert.equal(queryString.parse('name=%E0%A4').name, '%E0%A4')
  assert.equal(
    queryString.stringify({ name: 'hello world' }),
    'name=hello%20world'
  )
})

test('Expo CLI schemas remain compatible with the patched Zod release', () => {
  const { PluginSchema, DevToolsPluginOutputSchema } = cliRequire(
    './build/src/start/server/DevToolsPlugin.schema.js'
  )
  const plugin = {
    packageName: 'fixture',
    packageRoot: '/fixture',
    cliExtensions: {
      description: 'Fixture commands',
      commands: [{ name: 'inspect', title: 'Inspect', environments: ['cli'] }],
      entryPoint: './index.js',
    },
  }
  assert.equal(PluginSchema.parse(plugin).packageName, 'fixture')
  assert.equal(PluginSchema.safeParse({}).success, false)
  assert.equal(
    DevToolsPluginOutputSchema.parse([
      { type: 'text', text: 'ready', level: 'info' },
    ])[0].text,
    'ready'
  )
  const { createMCPDevToolsExtensionSchema } = cliRequire(
    './build/src/start/server/createMCPDevToolsExtensionSchema.js'
  )
  const schema = createMCPDevToolsExtensionSchema(plugin)
  assert.equal(schema.parse({ command: 'inspect' }).command, 'inspect')
  assert.equal(schema.safeParse({ command: 'missing' }).success, false)
})

test('patched EAS utility dependencies retain the APIs used by the CLI', () => {
  const { diffLines } = easRequire('diff')
  assert.equal(diffLines('before\n', 'after\n').length, 2)
  const { merge } = easRequire('ts-deepmerge')
  assert.deepEqual(merge({ nested: { first: 1 } }, { nested: { second: 2 } }), {
    nested: { first: 1, second: 2 },
  })
  const rudderRequire = createRequire(
    easRequire.resolve('@expo/rudder-sdk-node')
  )
  const { v4, validate } = rudderRequire('uuid')
  assert.equal(validate(v4()), true)
})
