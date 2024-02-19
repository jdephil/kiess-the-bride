import { createApi, createCustomServiceCall } from '@thinknimble/tn-models'
import { guestShape, guestUpdateShape } from './models'
import { axiosInstance } from '../axios-instance'

const update = createCustomServiceCall(
  {
    inputShape: guestUpdateShape,
    outputShape: guestShape,
  },
  async ({ client, slashEndingBaseUri, input, utils: { toApi, fromApi } }) => {
    const { id, ...rest } = toApi(input)
    const res = await client.patch(`${slashEndingBaseUri}${id}/`, rest)
    return fromApi(res.data)
  },
)

export const guestApi = createApi(
  {
    client: axiosInstance,
    baseUri: '/guests/',
    models: {
      entity: guestShape,
    },
  },
  { update },
)
