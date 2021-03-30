import {combineReducers} from "redux";
import {reposReducer} from "./reposReducer";

export const rootReducer = combineReducers({
    repo:reposReducer
})

export type RootState = ReturnType<typeof rootReducer>