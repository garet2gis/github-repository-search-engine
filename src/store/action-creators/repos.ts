import {ReposAction, ReposActionTypes, SetReposAction} from "../../types/repos";
import {reposAPI} from "../../api/repos";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers";
import {RepoType} from "../../types/repoType";

export const setRepos = (payload: Array<RepoType>): SetReposAction => {
    return {
        type: ReposActionTypes.SET_REPOS,
        payload,
    }
}

export const getRepos = (searchQuery?: string): ThunkAction<Promise<void>, RootState, unknown, ReposAction> => {
    return async (dispatch) => {
        try {
            const response = await reposAPI.getRepos(searchQuery);
            dispatch(setRepos(response.data.items));
        } catch (e) {
            console.log('error');
        }
    }
}