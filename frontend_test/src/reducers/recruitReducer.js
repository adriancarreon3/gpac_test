import { types } from "../types/types";

const initialState = {
    recruits: [],
    locations: [],
}

export const recruitReducer =  (state = initialState, action) => {

    switch (action.type) {
        case types.addNewRecruit:
            return {
                ...state,
                recruits: [...state.recruits, action.payload]
            }

        case types.loadRecruits:
            return {
                ...state,
                recruits: [...action.payload]
            }
        case types.loadLocations:
            return {
                ...state,
                locations: [...action.payload]
            }

        default:
            return state;
    }

}