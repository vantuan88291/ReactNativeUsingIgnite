import apisauce from 'apisauce'
import APIConfig from '../Config/APIConfig'

let defaultParams = {
  baseURL: APIConfig.BASE_URL,
  timeout: APIConfig.TIME_OUT,
  headers: {
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

const configHeader = (params = {}) => {
  return addAuthentication(params)
}

const addAuthentication = (headerParams = {}, otherParams = {}) => {
  let newParams = {
    ...defaultParams,
    headers: {
      ...defaultParams.headers,
      ...headerParams
    },
    ...otherParams
  }

  return addParams(newParams)
}

const addParams = (newParams = {}) => {
  return apisauce.create({
    ...defaultParams,
    ...newParams,
  })
}

const api = apisauce.create(defaultParams)

module.exports = {
  api,
  configHeader,
  addParams,
  addAuthentication
}
