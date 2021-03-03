import Swal from 'sweetalert2';

import { talentService } from "../services/talentService";
import { types } from "../types/types";


export const addNewRecruit = (recruit) => {
    
    return async(dispatch, getState) => {

        const { id_user } = getState().auth;

        let newRecruit = {
            id_owner: id_user,
            ...recruit
        }
        
        const response = await talentService.addRecruit(newRecruit);
        if(response.status === 'success'){
            
            const resRecruit = await talentService.getRecruitById(response.data?.id_recruit);
            if(resRecruit.status === 'success'){
    
                newRecruit = resRecruit.data[0];
    
                dispatch({
                    type: types.addNewRecruit,
                    payload: newRecruit
                });
            }
            else{
                Swal.fire('Error', response.data, 'error');
            }
        }
        else{
            Swal.fire('Error', response.data, 'error');
        }
    }
}

export const setRecruits = (recruits) => ({
       type: types.loadRecruits,
       payload: recruits
});

export const setLocations = (locations) => ({
       type: types.loadLocations,
       payload: locations
});
