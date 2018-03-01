import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "./auth.action";

const initialState = {
  loading: false,
  errors: [],
  user: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case REGISTER_USER + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case REGISTER_USER + "_FULFILLED":
      return {
        ...state,
        user: payload,
        loading: false
      }

    case REGISTER_USER + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }

    case LOGIN_USER + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case LOGIN_USER + "_FULFILLED":
      return {
        ...state,
        user: payload,
        loading: false
      }

    case LOGIN_USER + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      }

    default: {
      return state;
    }
  }
};
