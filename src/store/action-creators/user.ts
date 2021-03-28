import {
    FetchUsersAction,
    FetchUsersErrorAction,
    FetchUsersSuccessAction,
    UserAction,
    UserActionTypes
} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
import {AppThunk} from "../../types/thunk";


export const fetchUsers = () : FetchUsersAction=>{
    return {
        type: UserActionTypes.FETCH_USERS,
    }
}

export const fetchUsersSuccess = (payload : any[]) : FetchUsersSuccessAction=>{
    return {
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload,
    }
}

export const fetchUsersError = (payload : string) : FetchUsersErrorAction=>{
    return {
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload,
    }
}

export const getUsers = () : AppThunk => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch(fetchUsers());
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(()=>{
                dispatch(fetchUsersSuccess(response.data));
            },500)
        } catch (e) {
            dispatch(fetchUsersError('Error loading users'));
        }
    }
}