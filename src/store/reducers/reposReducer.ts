import {ReposAction, ReposActionTypes} from "../../types/repos";
import {RepoShortType} from "../../types/SearchReposType";

const initialState = {
    items: [] as Array<RepoShortType>,
    isFetching:true,
    currentPage:1,
    perPage:10,
    totalCount:0,
    isFetchingError:false
}


type ReposState = typeof initialState


export const reposReducer = (state = initialState, action: ReposAction):ReposState  => {
    switch (action.type) {
        case ReposActionTypes.SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case ReposActionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case ReposActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case ReposActionTypes.SET_FETCH_ERROR:
            return {
                ...state,
                isFetchingError: action.payload
            }
        default:
            return state;
    }
}