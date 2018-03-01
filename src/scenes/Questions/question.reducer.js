import {CREATE_QUESTION, GET_QUESTION, GET_QUESTIONS} from "./question.action";

const initialState = {
  loading: false,
  errors: [],
  questions: [],
  question: null,

};


export default (state = initialState, {type, payload}) => {
  switch (type) {


    case CREATE_QUESTION + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case CREATE_QUESTION + "_FULFILLED":
      return {
        ...state,
        success: true,
        id: payload,
        loading: false
      }
    case CREATE_QUESTION + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }


    case GET_QUESTIONS + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case GET_QUESTIONS + "_FULFILLED":
      return {
        ...state,
        questions: payload,
        loading: false
      }
    case GET_QUESTIONS + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }


    case GET_QUESTION + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case GET_QUESTION + "_FULFILLED":
      return {
        ...state,
        question: payload,
        loading: false
      }
    case GET_QUESTION + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }


    default: {
      return state;
    }
  }
};

