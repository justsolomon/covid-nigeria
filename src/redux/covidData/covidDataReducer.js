import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from './covidDataTypes';

const initialState = {
  loading: false,
  data: { states: [] },
  error: '',
};

const covidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: { states: [] },
        error: action.payload,
      };
    default:
      return state;
  }
};

export default covidDataReducer;
