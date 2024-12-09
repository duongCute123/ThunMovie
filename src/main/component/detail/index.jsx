import { combineReducers } from "redux";
import Favourite from "../../../store/favorites"
const combinedReducer = combineReducers({
    favourist: Favourite
})
export default combinedReducer