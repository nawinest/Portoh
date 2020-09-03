import { combineReducers } from 'redux'
import userEnviroment from './userEnviroment'
import PageManagement from './PageManagement'
export default combineReducers({
  userEnviroment,
  PageManagement
})
