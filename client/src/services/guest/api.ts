import {
  createApi,
  createCustomServiceCall,
  createPaginatedServiceCall,
} from '@thinknimble/tn-models'
import { guestShape, guestUpdateShape } from './models'
import { axiosInstance } from '../axios-instance'
import { z } from 'zod'

const update = createCustomServiceCall(
  {
    inputShape: guestUpdateShape,
    outputShape: guestShape,
  },
  async ({ client, input, utils: { toApi, fromApi } }) => {
    const { id, ...rest } = toApi(input)
    const res = await client.patch(`/guests/${id}/`, rest)
    return fromApi(res.data)
  },
)
const list = createPaginatedServiceCall({
  outputShape: guestShape,
  filtersShape: {
    fullName: z.string(),
  },
})
export const guestApi = createApi(
  {
    client: axiosInstance,
    baseUri: '/guests/',
    models: {
      entity: guestShape,
    },
  },
  { update, list },
)
