import {request} from "./index"
import urlencodeForm from "../urlencodeForm"
import JWT from "jwt-decode"

const rememberUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
}
const rememberToken = (response) => {
  localStorage.setItem('token', response.token)
  localStorage.setItem('refreshToken', response.refreshToken)
}


export const register = async (values) => {

  const [err, response] = await request.post('/register', values)
  if (err) throw err.response.data
  let user = JWT(response.data.token).data
  if (!user) user = response.data.user

  rememberUser(user)

  rememberToken(response.data)

  return user
}

export const login = async ({email, password}) => {

  const [err, response] = await request.post('/login', {email, password})
  if (err) throw err.response.data
  let user = JWT(response.data.token).data
  if (!user) user = response.data.user
  rememberUser(user)
  rememberToken(response.data)

  return user
}

export const logout = async () => {
  localStorage.clear()
}


export const update = async (form) => {
  const [err, response] = await request.put('/user/' + get().id, urlencodeForm(form))
  if (err) throw err.response.data
  return JWT(response.data.token).data
}


export const get = () => {
  return JWT(localStorage.getItem('token')).data
}
