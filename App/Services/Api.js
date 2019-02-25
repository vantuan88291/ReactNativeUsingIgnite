import getApi from './API/getApi'
import configHeaders from './ConfigHeader'
import APIConfig from '../Config/APIConfig'

export const apiList = {
  ...getApi,
  ...configHeaders
}

const create = (baseURL = APIConfig.BASE_URL) => {
  return apiList
}

export default {
  create
}
