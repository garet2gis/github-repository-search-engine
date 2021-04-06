import {combineReducers} from "redux";
import {reposReducer} from "./reposReducer";
import {cardReducer} from "./cardReducer";

export const rootReducer = combineReducers({
    repo: reposReducer,
    card: cardReducer
})

export type RootState = ReturnType<typeof rootReducer>