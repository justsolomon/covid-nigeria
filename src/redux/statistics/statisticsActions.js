import { UPDATE_CURRENT_STATS } from './statisticsTypes';

export const updateCurrentStats = (data) => {
  return {
    type: UPDATE_CURRENT_STATS,
    payload: data,
  };
};
