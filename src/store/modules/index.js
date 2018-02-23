import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import widgetRouter from './widget';

export default combineReducers({
  routing: routerReducer,
  widget: widgetRouter,
});
