import { actionTypes} from "../constants/actionsTypes";

export const changeStatusAsync = text => {
    return dispatch => {
        setTimeout(() => dispatch ({
            type: actionTypes.CHANGE_STATUS,
            payload: text
        }), 1000)
    }
}

export const changeStatus = userName => ({
    type: actionTypes.CHANGE_STATUS,
    payload: `${userName} is typing`
})