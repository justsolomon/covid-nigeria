import Axios from 'axios';
import { updateCurrentStats } from '../statistics/statisticsActions';
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from './covidDataTypes';

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchCovidData = (values) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    Axios.get('https://covidnigeria.herokuapp.com/api', values)
      .then((res) => {
        dispatch(fetchDataSuccess(res.data.data));

        //update current statistics
        const {
          death,
          discharged,
          totalActiveCases,
          totalConfirmedCases,
        } = res.data.data;

        dispatch(
          updateCurrentStats({
            deaths: death,
            discharged,
            active: totalActiveCases,
            confirmed: totalConfirmedCases,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchDataFailure(err.message));
      });
  };
};
