import axios from '../../axiosInstance'
import  AuthActionTypes  from './auth.types';

export const login = (email, password) =>  {
    return async (dispatch) => {
      try {
        dispatch({
          type: AuthActionTypes.LOGIN
        })

      
        const res = await axios.post(
          '/login',
          {
            email,
            password
          }
        )
  
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: res.data.data
        })

      } catch (err) {
        dispatch({
          type: AuthActionTypes.LOGIN_FAILURE,
          payload: err && err.response && err.response.status
        })
      }
    }
}




