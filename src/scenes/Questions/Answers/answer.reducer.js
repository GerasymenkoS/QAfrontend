import {CREATE_ANSWER, GET_ANSWERS,GET_ANSWER} from "./answer.action";

const initialState = {
  loading: false,
  errors: [],
  answers: [],
  answer: null,

};

export default (state = initialState, {type, payload}) => {
  switch (type) {




    case CREATE_ANSWER + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case CREATE_ANSWER + "_FULFILLED":
      return {
        ...state,
        loading: false
      }
    case CREATE_ANSWER + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }






    case GET_ANSWERS + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case GET_ANSWERS + "_FULFILLED":
      return {
        ...state,
        answers: payload,
        loading: false
      }
    case GET_ANSWERS + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }








    case GET_ANSWER + "_PENDING":
      return {
        ...state,
        loading: true,
      }
    case GET_ANSWER + "_FULFILLED":
      return {
        ...state,
        answer:payload,
        loading: false
      }
    case GET_ANSWER + "_REJECTED":
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