import {request} from "../index"
import answers from './answer'

export const create = async (values) => {

  const [err, response] = await request.post('/questions', values)
  if (err) throw err.response.data
  const question = response.data
  return question.id
}
export const all = async () => {

  const [err, response] = await request.get('/questions')
  if (err) throw err.response.data

  return response.data
}

export const find = async (id) => {

  const [err, response] = await request.get('/questions/' + id)
  if (err) throw err.response.data

  return response.data
}
export const select = (question_id) => {

  const questionUrl = '/questions/' + question_id

  return {answer: answers(questionUrl)}
}
