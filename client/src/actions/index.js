import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    /* 
    redux返回值為function (使用redux-thunk)
    --------------------------------------
    如果redux-thunk察覺我們return的是function，它會給我們dispatch func的ref
    等到我們做完想做的事之後
    再執行dispatch
    而dispatch會把action object傳給reducer
    */
   console.log("[DEBUG] fethchUser action triggered and start sending request to BE");
    return function(dispatch) {
        axios.get('/api/current_user')
        .then((res) => {
            console.log("[DEBUG] fethchUser action get response back from BE, then send action object to reducer with dispatch function");
            dispatch ({
                type: FETCH_USER,
                payload: res.data
            })
        })
    }
    
    /*
    redux返回值為object (不使用redux-thunk)
    --------------------------------------
    const request = axios.get('/api/current_user');
    我們不需要做任何事
    object直接被dispatch傳給reducer
    */
    /*
    return {
        type: FETCH_USER,
        payload: request
    }
    */
}

export const handleStripeToken = (token) => {
    // token is from stripe, contain card info and the transaction id we need
    console.log('[DEBUG] ACTION handleStripeToken token = ', token);
    debugger;

    return function(dispatch) {
        axios.post('api/stripe', token)
        .then((res) => {
            dispatch ({
                type: FETCH_USER,
                payload: res.data
            })
        })
    }
}