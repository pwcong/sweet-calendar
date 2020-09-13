import {
  SETTING_SET_DATE,
  SETTING_SET_FREEDAY,
  SETTING_SET_WORKDAY,
} from '../actions/setting';

import DEFAULT_STATE from '../models/setting';

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SETTING_SET_DATE:
      return Object.assign({}, state, {
        date: action.payload,
      });
    case SETTING_SET_WORKDAY:
      return Object.assign({}, state, {
        workDay: action.payload,
      });
    case SETTING_SET_FREEDAY:
      return Object.assign({}, state, {
        freeDay: action.payload,
      });
    default:
      return state;
  }
};
