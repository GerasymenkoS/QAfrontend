import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './scenes/Auth/auth.reducer'
import questionReducer from './scenes/Questions/question.reducer'
import answerReducer from './scenes/Questions/Answers/answer.reducer'

import {loginUser} from "./scenes/Auth/auth.action"

const reducers = combineReducers({
  router: routerReducer,
  userReducer,
  questionReducer,
  answerReducer

})


const history = createBrowserHistory()

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    promiseMiddleware()
  )))

if (localStorage.getItem('user')) {
  store.dispatch(loginUser())
}
export default store