import axios from 'axios';

import {
    HANDLE_INC,
    USERS_SUCCESS,
    USERS_LOADING,
    USERS_ERR
} from './actionTypes';

export const deleteUser = (idx) =>{
    return async (dispatch) => {
        dispatch({
        type: USERS_LOADING
    })
    axios.post('http://localhost:1337/delElem',{
        index:idx
    })
    .then(data=>{
        return dispatch({
            type: USERS_SUCCESS,
            users: data.data,
        })
    })

}
export const getUsers = () => {
    return async (dispatch) => {
        dispatch({
        type: USERS_LOADING
    })

    axios.get('http://localhost:1337/getobj',{
    headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/x-www-form-urlencoded',
        
      },
    })
    
    .then(data=>{
        return dispatch({
            type: USERS_SUCCESS,
            users: data.data,
        })
    })
    .catch(error=>{
        return dispatch({
            type: USERS_ERR,
        })
    })
    
}
  };