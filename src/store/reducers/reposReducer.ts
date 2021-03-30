import {ReposAction, ReposActionTypes} from "../../types/repos";
import {RepoType} from "../../types/repoType";

const initialState = {
    items: [] as Array<RepoType>,
    isFetching:true,
}


type ReposState = typeof initialState


export const reposReducer = (state = initialState, action: ReposAction):ReposState  => {
    switch (action.type) {
        case ReposActionTypes.SET_REPOS:
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }
}