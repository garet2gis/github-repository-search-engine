import {FullRepoType} from "../../types/FullRepoType";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducers";
import {reposAPI} from "../../api/repos";
import {CardAction, CardActionTypes, SetCardAction, SetContributorAction} from "../../types/card";
import {ContributorType} from "../../types/ContributorType";

export const setCard = (payload: FullRepoType): SetCardAction =>
    ({type: CardActionTypes.SET_CARD, payload})

export const setContributors = (payload: Array<ContributorType>): SetContributorAction =>
    ({type: CardActionTypes.SET_CONTRIBUTOR, payload})



export const getCurrentRepo = (username : string,repoName : string): ThunkAction<Promise<void>, RootState, unknown, CardAction> => {
    return async (dispatch) =>{
        const response = await reposAPI.getCurrentRepo(username, repoName)
        dispatch(setCard(response.data))
    }
}

export const getContributors = (username : string,repoName : string): ThunkAction<Promise<void>, RootState, unknown, CardAction> => {
    return async (dispatch) =>{
        const response = await reposAPI.getContributors(username, repoName)
        dispatch(setContributors(response.data))
    }
}