import { LOGIN_SUCCESS, AUTH_ERROR, USER_LOADED, LOG_OUT } from '../../actions/Auth/actionTypes';
import { clearStorage, setLocalStorage } from '../../../utils/localStorage';
import { ACCESS_TOKEN } from '../../../configs/constants';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
  token: null
};

const AuthReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
        setLocalStorage(ACCESS_TOKEN, payload.accessToken)
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
        error: null,
        token: payload.accessToken
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        error: null,
        token: null
      };

    case AUTH_ERROR:
    case LOG_OUT:
      clearStorage();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: payload?.message,
        token: null
      };
    default:
      return state;
  }
};

export default AuthReducer;
