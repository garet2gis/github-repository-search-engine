import { CardAction, CardActionTypes } from "../../types/card";
import {FullRepoType} from "../../types/FullRepoType";
import {ContributorType} from "../../types/ContributorType";

const initialState = {
    repo: {} as FullRepoType,
    contributors : [] as Array<ContributorType>
}


type CardState = typeof initialState


export const cardReducer = (state = initialState, action: CardAction):CardState  => {
    switch (action.type) {
        case CardActionTypes.SET_CARD:
            return {
                ...state,
                repo: action.payload
            }
        case CardActionTypes.SET_CONTRIBUTOR:
            return {
                ...state,
                contributors: action.payload
            }
        default:
            return state;
    }
}