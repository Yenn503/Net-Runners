import type { Command } from '../../commands.js'

const evidence = {
  type: 'local',
  name: 'evidence',
  supportsNonInteractive: true,
  description:
    'Append evidence entries (finding, artifact, note) to the active Net-Runner engagement ledger',
  argumentHint:
    'status | note <text> | finding <severity> <title> | <evidence> | [recommendation] | artifact <label> | <path> | [description] | close [summary]',
  load: () => import('./evidence.js'),
} satisfies Command

export default evidence
