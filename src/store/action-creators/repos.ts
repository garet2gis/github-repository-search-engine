import {
    ReposAction,
    ReposActionTypes,
    SetCurrentPage,
    SetFetchError,
    SetIsFetching,
    SetReposAction
} from "../../types/repos";
import {reposAPI} from "../../api/repos";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers";
import {SearchReposType} from "../../types/SearchReposType";

export const setRepos = (payload: SearchReposType): SetReposAction =>
    ({type: ReposActionTypes.SET_REPOS, payload: payload})

const setIsFetching = (bool: boolean): SetIsFetching =>
    ({type: ReposActionTypes.SET_IS_FETCHING, payload: bool})

export const setCurrentPage = (page: number): SetCurrentPage =>
    ({type: ReposActionTypes.SET_CURRENT_PAGE, payload: page})

const setFetchError = (bool: boolean): SetFetchError =>
    ({type: ReposActionTypes.SET_FETCH_ERROR, payload: bool})


export const getRepos = (currentPage: number, perPage: number, searchQuery?: string): ThunkAction<Promise<void>, RootState, unknown, ReposAction> => {
    if(!searchQuery)
        searchQuery = "stars:%3E1"
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await reposAPI.getRepos(searchQuery, currentPage, perPage);
            dispatch(setRepos(response.data));
        } catch (e) {
            dispatch(setIsFetching(true))
            dispatch(setIsFetching(false))
            setTimeout(()=>{
                dispatch(setFetchError(false))
            },2000)
        }
    }
}
