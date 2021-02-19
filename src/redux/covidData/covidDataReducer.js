import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from './covidDataTypes';

const initialState = {
  loading: false,
  data: { states: [] },
  error: '',
  success: false,
};

const covidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
        success: true,
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: { states: [] },
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export default covidDataReducer;
