import {FullRepoType} from "./FullRepoType";
import {ContributorType} from "./ContributorType";

export enum CardActionTypes {
    SET_CARD = 'SET_CARD',
    SET_CONTRIBUTOR = 'SET_CONTRIBUTOR'
}


export type SetCardAction = {
    type: CardActionTypes.SET_CARD
    payload: FullRepoType
}

export type SetContributorAction = {
    type: CardActionTypes.SET_CONTRIBUTOR
    payload: Array<ContributorType>
}

export type CardAction = SetCardAction | SetContributorAction