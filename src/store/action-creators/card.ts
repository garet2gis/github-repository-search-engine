import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers";
import {reposAPI} from "../../api/repos";
import {CardActionTypes, ContributorType} from "../../types/card";

import {PropertiesType} from "../../types/utils";
import { FullRepoType } from "../../types/repos";

const CardActionCreators = {
    setCard: (payload: FullRepoType) =>
        ({type: CardActionTypes.SET_CARD, payload} as const),
    setContributors: (payload: Array<ContributorType>) =>
        ({type: CardActionTypes.SET_CONTRIBUTOR, payload} as const)
}


export type CardAction = ReturnType<PropertiesType<typeof CardActionCreators>>


//thunks
export const getCurrentRepo = (username: string, repoName: string): ThunkAction<Promise<void>, RootState, unknown, CardAction> => {
    return async (dispatch) => {
        const response = await reposAPI.getCurrentRepo(username, repoName)
        dispatch(CardActionCreators.setCard(response.data))
    }
}

export const getContributors = (username: string, repoName: string): ThunkAction<Promise<void>, RootState, unknown, CardAction> => {
    return async (dispatch) => {
        const response = await reposAPI.getContributors(username, repoName)
        dispatch(CardActionCreators.setContributors(response.data))
    }
}

