import AuthActionTypes from './auth.types'

const INITIAL_STATE = {
    loading: true,
    token: null,
    success: true,
    error: false
  };
  
  const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AuthActionTypes.LOGIN:
        return {
          ...state,
          loading: true,
          token: null,
        }
      case AuthActionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.data.token,
          error: false
        }
       case AuthActionTypes.LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          token: null,
          error: true
        }
      default: return state
    }
  };
  
  export default AuthReducer;
  