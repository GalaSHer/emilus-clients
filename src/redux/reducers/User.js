import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER,
  UPPDATE_USER,
  FIND_USER
} from '../constants/User';

const initialState = {
  loading: false,
  users: [],
  error: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.users };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case FIND_USER:
      const user = state.users.find(user => user.id === Number(action.payload));
      return {
        ...state,
        currentUser: user || {},
      };      
    case UPPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
            if (user.id === action.payload.id) {
              return {
                ...user,
                ...action.payload,
              };
            }
            return user;
          }),
        }
    default:
      return state;
  }
};

export default user;
