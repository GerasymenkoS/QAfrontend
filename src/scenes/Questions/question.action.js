import {question} from '../../services/api/index'

export const CREATE_QUESTION = 'CREATE_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTION = 'GET_QUESTION'

export const createQuestion = values => ({
  type: CREATE_QUESTION,
  payload: question.create(values),
})

export const getQuestions = values => ({
  type: GET_QUESTIONS,
  payload: question.all(values),
})

export const getQuestion = id => ({
  type: GET_QUESTION,
  payload: question.find(id),
})