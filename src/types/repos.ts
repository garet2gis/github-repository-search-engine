import {SearchReposType} from "./SearchReposType";

export enum ReposActionTypes {
    SET_REPOS = 'SET_REPOS',
    SET_IS_FETCHING = "SET_IS_FETCHING",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_FETCH_ERROR = "SET_FETCH_ERROR"
}


export type SetReposAction = {
    type: ReposActionTypes.SET_REPOS
    payload: SearchReposType
}

export type SetIsFetching = {
    type: ReposActionTypes.SET_IS_FETCHING
    payload: boolean
}

export type SetCurrentPage = {
    type: ReposActionTypes.SET_CURRENT_PAGE
    payload: number
}

export type SetFetchError = {
    type: ReposActionTypes.SET_FETCH_ERROR
    payload: boolean
}

export type ReposAction =
    SetReposAction
    | SetIsFetching
    | SetCurrentPage
    | SetFetchError