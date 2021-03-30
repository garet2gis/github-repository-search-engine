import {RepoType} from "./repoType";


export enum ReposActionTypes {
    SET_REPOS = 'SET_REPOS'
}


export type SetReposAction = {
    type: ReposActionTypes.SET_REPOS
    payload: Array<RepoType>
}

export type ReposAction = SetReposAction