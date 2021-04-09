import {
    ReposActionTypes, SearchReposType,
} from "../../types/repos";
import {reposAPI} from "../../api/repos";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers";
import {PropertiesType} from "../../types/utils";

const ReposActionCreators = {
    setRepos: (payload: SearchReposType) =>
        ({type: ReposActionTypes.SET_REPOS, payload: payload} as const),
    setIsFetching: (bool: boolean) =>
        ({type: ReposActionTypes.SET_IS_FETCHING, payload: bool} as const),
    setCurrentPage: (page: number) =>
        ({type: ReposActionTypes.SET_CURRENT_PAGE, payload: page} as const),
    setFetchError: (bool: boolean) =>
        ({type: ReposActionTypes.SET_FETCH_ERROR, payload: bool} as const)
}

export type ReposAction = ReturnType<PropertiesType<typeof ReposActionCreators>>

export const setRepos = ReposActionCreators.setRepos
export const setCurrentPage = ReposActionCreators.setCurrentPage


//thunks
export const getRepos = (currentPage: number, perPage: number, searchQuery?: string): ThunkAction<Promise<void>, RootState, unknown, ReposAction> => {
    if (!searchQuery)
        searchQuery = "stars:%3E1"
    return async (dispatch) => {
        try {
            dispatch(ReposActionCreators.setIsFetching(true))
            const response = await reposAPI.getRepos(searchQuery, currentPage, perPage);
            dispatch(setRepos(response.data));
        } catch (e) {
            dispatch(ReposActionCreators.setIsFetching(true))
            dispatch(ReposActionCreators.setIsFetching(false))
            setTimeout(() => {
                dispatch(ReposActionCreators.setFetchError(false))
            }, 2000)
        }
    }
}
