import {question} from '../../../services/api/index'

export const CREATE_ANSWER = 'CREATE_ANSWER'
export const GET_ANSWERS = 'GET_ANSWERS'
export const GET_ANSWER = 'GET_ANSWER'

export const createAnswer = (question_id, {name, text}) => async dispatch => {
  await dispatch({
    type: CREATE_ANSWER,
    payload: question.select(question_id).answer.create({text})
  })
  await dispatch(getAnswers(question_id))
}

export const getAnswers = (question_id) => ({
  type: GET_ANSWERS,
  payload: question.select(question_id).answer.all(),
})

export const getAnswer = (question_id, id) => ({
  type: GET_ANSWER,
  payload: question.select(question_id).answer.find(id),
})