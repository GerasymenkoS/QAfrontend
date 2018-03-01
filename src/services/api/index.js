import axios from 'axios'
import to from '../to'
import * as user from './user'
import * as question from './question/question'
import * as answer from './question/answer'

export const API_URL = 'http://localhost:3333/api'


const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return false
  return "Bearer " + localStorage.getItem('token').replace(/^"(.*)"$/, '$1')
}
if (getToken()) {

  axios.defaults.headers.common['Authorization'] = getToken()
}
const get = async (url) => await to(axios.get(API_URL + url))
const post = async (url, data) => await to(axios.post(API_URL + url, data))
const put = async (url, data) => await to(axios.put(API_URL + url, data))

const request = {get, post, put}

export {
  request,
  question,
  answer,
  user,
};
