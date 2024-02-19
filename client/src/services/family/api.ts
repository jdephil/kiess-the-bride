import { createApi } from '@thinknimble/tn-models'
import { familyShape } from './models'
import { axiosInstance } from '../axios-instance'

export const familyApi = createApi({
  client: axiosInstance,
  baseUri: '/familys/',
  models: {
    entity: familyShape,
  },
})
