import { FETCH_USER } from '../actions/types';

// default state is null
export default function changeState(state = null, action) {
    console.log("[DEBUG] authReducer receive action object", action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}