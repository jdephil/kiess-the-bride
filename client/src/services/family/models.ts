import { z } from 'zod'
import { GetInferredFromRaw, readonly } from '@thinknimble/tn-models'
import { baseModelShape } from '../base-model'

export const familyShape = {
  ...baseModelShape,
  lastName: z.string(),
}

export type Family = GetInferredFromRaw<typeof familyShape>
