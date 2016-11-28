import axios from 'axios';

const API_KEY = 'b68279dd9e3ec9121ef0576990607535';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    //redux-thunk allows us to return a function instead of an object in an action
    //using redux-thunk vs redux-promise: http://stackoverflow.com/questions/36967721/what-are-the-differences-between-redux-thunk-and-redux-promise-when-used-with-ax
    return (dispatch) => {
      request.then( (response) => {
        dispatch({ type: FETCH_WEATHER, payload: response })
      });
    };

    /*return {
      type: FETCH_WEATHER,
      payload: request
    };*/



}
