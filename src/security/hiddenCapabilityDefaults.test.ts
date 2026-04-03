import assert from 'node:assert/strict'
import test from 'node:test'
import { resolveTeamMemoryEnabled } from '../memdir/teamMemPaths.ts'
import { resolveAutoDreamEnabled } from '../services/autoDream/config.ts'

test('team memory stays on by default when auto memory is active', () => {
  assert.equal(resolveTeamMemoryEnabled(true, true), true)
  assert.equal(resolveTeamMemoryEnabled(false, true), false)
  assert.equal(resolveTeamMemoryEnabled(true, false), false)
})

test('auto-dream stays on by default unless the operator or runtime turns it off', () => {
  assert.equal(resolveAutoDreamEnabled(undefined, null), true)
  assert.equal(resolveAutoDreamEnabled(undefined, {}), true)
  assert.equal(resolveAutoDreamEnabled(undefined, { enabled: true }), true)
  assert.equal(resolveAutoDreamEnabled(undefined, { enabled: false }), false)
  assert.equal(resolveAutoDreamEnabled(true, { enabled: false }), true)
  assert.equal(resolveAutoDreamEnabled(false, { enabled: true }), false)
})
