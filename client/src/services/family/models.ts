import { z } from 'zod'
import { GetInferredFromRaw, readonly } from '@thinknimble/tn-models'
import { baseModelShape } from '../base-model'

export const familyShape = {
  ...baseModelShape,
  lastName: z.string(),
  guests: z.array(z.string()),
}

export type Family = GetInferredFromRaw<typeof familyShape>

export const findFamilyShape = {
  id: z.string().uuid(),
}
