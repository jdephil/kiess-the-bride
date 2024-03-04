import {
  createApi,
  createCustomServiceCall,
  createPaginatedServiceCall,
} from '@thinknimble/tn-models'
import { familyShape, findFamilyShape } from './models'
import { axiosInstance } from '../axios-instance'
import { guestShape } from '../guest'
import { z } from 'zod'

// const getWholeFamily = createCustomServiceCall(
//   {
//     inputShape: findFamilyShape,
//     outputShape: guestShape,
//   },
//   async ({ client, input, utils: { toApi, fromApi } }) => {
//     const { id, ...rest } = toApi(input)
//     const res = await client.get(`/familys/${id}/get_whole_family/`, rest)
//     return fromApi(res.data)
//   },
// )
// const getMatches = createPaginatedServiceCall(
//   {
//     inputShape: {
//       urlParams: z.object({
//         someId: z.string(),
//       }),
//     },
//     outputShape: guestShape,
//   }
//   {
//     uri: `/familys/${id}/get_whole_family/`,
//     // httpMethod: 'post' (optional, default get)
//   },
// )

const getWholeFamily = createPaginatedServiceCall(
  {
    inputShape: {
      urlParams: z.object({
        id: z.string(),
      }),
    },
    outputShape: guestShape,
  },
  {
    uri: ({ id }) => `${id}/get_whole_family/`,
  },
)
export const familyApi = createApi(
  {
    client: axiosInstance,
    baseUri: '/familys/',
    models: {
      entity: familyShape,
    },
  },
  { getWholeFamily },
)
