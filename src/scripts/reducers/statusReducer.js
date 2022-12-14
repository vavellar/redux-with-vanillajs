import { actionTypes } from "../constants/actionsTypes"

const initialState = { status: ''}

export const statusReducer = (state = initialState, action) => {
    const status = action.payload

    switch (action.type) {
        case actionTypes.CHANGE_STATUS: 
            return Object.assign({}, state, { status });
            // can be replace { ...state, status } in es2018
        default:
            return state
    }
}