import * as ReposActionCreator from "./repos";
import * as CardActionCreator from './card'

export default {
    ...ReposActionCreator,
    ...CardActionCreator
}
