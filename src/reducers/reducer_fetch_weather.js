import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {

    switch(action.type) {
        case FETCH_WEATHER:
            //use array because it returns several objects
            //do not alter the original state, return a new state array
            //alternative to the spread operator: use Object.assign()
            //http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
            return [action.payload.data, ...state];
    }

    return state;
}