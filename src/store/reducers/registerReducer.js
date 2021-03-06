import types from '../types';
import createReducer from '../reducers/createReducer';

const initialState = {
  registered: false,
  model: {
    userName: '',
    email: '',
    password: '',
    gender: '',
    birthday: '',
    birthTime: '',
    weight: ''
  },
  regErrors: {},
  regServerErrors: {
    emailError: []
  },
  loading: false
};

const headerReducer = createReducer(initialState, {
  [types.SET_NAME_REGISTER]: (state, { payload }) => {
    return {
      ...state,
      model: { ...state.model, userName: payload }
    };
  },
  [types.SET_EMAIL_REGISTER]: (state, { payload }) => {
    return {
      ...state,
      model: { ...state.model, email: payload }
    };
  },
  [types.SET_PASSWORD_REGISTER]: (state, { payload }) => {
    return {
      ...state,
      model: { ...state.model, password: payload }
    };
  },
  [types.SET_GENDER_REGISTER]: (state, { payload }) => {
    return {
      ...state,
      model: { ...state.model, gender: payload }
    };
  },
  [types.SET_BIRTHDAY_REGISTER]: (state, { payload }) => {
    return {
      ...state,
      model: { ...state.model, birthday: payload }
    };
  },
  [types.SET_BIRTHTIME_REGISTER]: (state, { payload }) => {
    return {
      ...state,
      model: { ...state.model, birthTime: payload }
    };
  },
  [types.SET_WEIGHT_REGISTER]: (state, { payload }) => {
    return {
      ...state,
      model: { ...state.model, weight: payload }
    };
  },
  [types.SET_HEADER_BUTTON_MODE]: (state, { payload }) => {
    return {
      ...state,
      registerBtn: payload
    };
  },
  [types.USER_REGISTERED_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      registered: payload
    };
  },
  [types.SET_HEADER_BUTTON_MODE]: (state, payload) => {
    return {
      ...state,
      [payload.button]: payload.mode
    };
  },
  [types.CLEAR_REGISTER_MODEL]: (state) => {
    return {
      ...state,
      model: { ...initialState.model }
    };
  },
  [types.SET_REGISTER_ERROR]: (state, { payload }) => {
    return {
      ...state,
      regErrors: { ...state.regErrors, ...{ [payload]: payload } }
      // model: {...state.model, ...{[payload]: ""}}
    };
  },
  [types.CLEAN_REGISTER_ERROR]: (state, { payload }) => {
    const newState = Object.assign({}, state, {
      regErrors: Object.keys(state.regErrors).reduce((result, key) => {
        if (key !== payload) {
          result[key] = state.regErrors[key];
        }
        return result;
      }, {})
    });
    return {
      ...state,
      ...newState,
      regServerErrors: { emailError: [] }
    };
  },
  [types.SET_REGISTER_SERVER_ERROR]: (state, { payload }) => {
    return {
      ...state,
      regServerErrors: { ...payload }
    };
  },
  [types.SET_LOADING]: (state, { payload }) => {
    return {
      ...state,
      loading: payload
    };
  }
});

export default headerReducer;
