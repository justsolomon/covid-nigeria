import { UPDATE_CURRENT_STATS } from './statisticsTypes';

const initialState = {
  state: 'Nationwide',
  confirmed: 0,
  active: 0,
  discharged: 0,
  deaths: 0,
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_STATS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default statisticsReducer;
