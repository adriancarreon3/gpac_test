import Swal from 'sweetalert2';

import { types } from "../types/types";
import { talentService } from '../services/talentService';


export const loginAction = (email, password) => {

    return (dispatch) => {

        talentService.login(email, password)
            .then(({status, data}) =>{
                
                if(status === 'success'){
                    dispatch(login(data));
                    localStorage.setItem('user', JSON.stringify(data));
                }
                else{
                    console.log(data)
                    Swal.fire('Error', data, 'error');
                }

            })
            .catch( error =>{
                Swal.fire('Error', error, 'error');
            })

    }
}

export const login = (data) => ({
    type: types.login,
    payload: data
})

export const logoutAction = () => {
    return (dispatch) => {
        dispatch({
            type: types.logout
        });

        localStorage.removeItem('user');
    }
}

export const readUserAction = () => {
    return (dispatch) => {
        if(localStorage.getItem('user')){
            dispatch(login(JSON.parse(localStorage.getItem('user'))));
        }
    }
}
