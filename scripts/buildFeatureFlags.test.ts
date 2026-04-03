import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createBundleFeatureShim,
  NET_RUNNER_FEATURE_FLAGS,
  resolveFeatureFlag,
} from './buildFeatureFlags.ts'

test('Net-Runners build enables only the hidden capabilities used locally', () => {
  assert.equal(NET_RUNNER_FEATURE_FLAGS.COORDINATOR_MODE, true)
  assert.equal(NET_RUNNER_FEATURE_FLAGS.TEAMMEM, true)

  assert.equal(NET_RUNNER_FEATURE_FLAGS.KAIROS, false)
  assert.equal(NET_RUNNER_FEATURE_FLAGS.PROACTIVE, false)
  assert.equal(NET_RUNNER_FEATURE_FLAGS.UDS_INBOX, false)
  assert.equal(NET_RUNNER_FEATURE_FLAGS.VOICE_MODE, false)
  assert.equal(NET_RUNNER_FEATURE_FLAGS.BRIDGE_MODE, false)
  assert.equal(NET_RUNNER_FEATURE_FLAGS.ULTRAPLAN, undefined)
})

test('bundle feature shim reflects the selected flag values', () => {
  assert.equal(resolveFeatureFlag('COORDINATOR_MODE'), true)
  assert.equal(resolveFeatureFlag('TEAMMEM'), true)
  assert.equal(resolveFeatureFlag('KAIROS'), false)

  const moduleFactory = new Function(
    `${createBundleFeatureShim().replace('export function feature', 'function feature')}\nreturn { feature };`,
  ) as () => { feature: (name: string) => boolean }
  const { feature } = moduleFactory()

  assert.equal(feature('COORDINATOR_MODE'), true)
  assert.equal(feature('TEAMMEM'), true)
  assert.equal(feature('KAIROS'), false)
  assert.equal(feature('UDS_INBOX'), false)
})
