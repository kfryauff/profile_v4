import { combineReducers } from 'redux'

import profileReducer from './profile_reducer'
import projectReducer from './project_reducer'


export default combineReducers({
  profile: profileReducer,
  projects: projectReducer,
})
