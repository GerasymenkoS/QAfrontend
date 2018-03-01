import {user} from '../../services/api/index'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const registerUser = values => ({
  type: REGISTER_USER,
  payload: user.register(values),
})

export const loginUser = data => !data ? ({
  type: LOGIN_USER + "_FULFILLED",
  payload: user.get()
}) : ({
  type: LOGIN_USER,
  payload: user.login(data)
})

export const logoutUser = () => {
  user.logout()
  return {
    type: LOGOUT_USER,
  }
}