import { combineReducers } from 'redux';
import fetchWeatherReducer from './reducer_fetch_weather';

const rootReducer = combineReducers({
  fetchWeatherReducer: fetchWeatherReducer
});

export default rootReducer;
