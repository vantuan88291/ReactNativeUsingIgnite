import { call, put } from 'redux-saga/effects'
import getApiType from '../Redux/demoRedux'

export function * getApi (api, action) {
  const response = yield call(api.postLogin)
  console.log('getokeeee', response)
  if (response.ok) {
    yield put(getApiType.result('get data complete'))
  } else {
    yield put(getApiType.requestFail('get data error'))
  }
}
