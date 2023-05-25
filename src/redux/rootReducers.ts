import { combineReducers } from 'redux';
import snackBarsReducer from './snackBars/snackBarSlice';
import notificationsReducer from './notifications/notificationsSlice';

export const rootReducers = combineReducers({
  snackBars: snackBarsReducer,
  notifications: notificationsReducer,
});
