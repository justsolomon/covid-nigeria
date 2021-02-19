import { combineReducers } from 'redux';
import covidDataReducer from './covidData/covidDataReducer';
import statisticsReducer from './statistics/statisticsReducer';

const rootReducer = combineReducers({
  covidData: covidDataReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
