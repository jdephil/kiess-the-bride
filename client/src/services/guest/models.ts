import { z } from 'zod'
import { GetInferredFromRaw, readonly } from '@thinknimble/tn-models'
import { baseModelShape } from '../base-model'

export const guestShape = {
  ...baseModelShape,
  fullName: z.string(),
  attending: z.boolean(),
  dietaryRestrictions: z.string(),
  email: z.string().email(),
  family: z.array(z.string()),
  events: z.array(z.string()),
}

export type Guest = GetInferredFromRaw<typeof guestShape>

export const guestUpdateShape = {
  id: z.string().uuid(),
  attending: guestShape.attending,
  dietaryRestrictions: guestShape.dietaryRestrictions,
  email: guestShape.email,
  events: guestShape.events,
}
