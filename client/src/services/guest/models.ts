import { z } from 'zod'
import { GetInferredFromRaw, readonly } from '@thinknimble/tn-models'
import { baseModelShape } from '../base-model'

export const guestShape = {
  ...baseModelShape,
  firstName: z.string(),
  lastName: z.string(),
  attending: z.boolean(),
  dietaryRestrictions: z.string(),
  email: z.string().email(),
  family: z.array(z.string()),
}

export type Guest = GetInferredFromRaw<typeof guestShape>

export const guestUpdateShape = {
  id: guestShape.id,
  attending: guestShape.attending,
  dietaryRestrictions: guestShape.dietaryRestrictions,
  email: guestShape.email,
}
