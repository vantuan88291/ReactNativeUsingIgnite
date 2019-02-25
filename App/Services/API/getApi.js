import { api } from '../ConfigHeader'
import Config from '../../Config'

const postLogin = () => api.post(Config.LOGIN_POST)

module.exports = {
  postLogin
}
