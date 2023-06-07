import { combineReducers } from "redux";
import { coctailsReducer } from "../coctailsReducer";

export const allReducers = combineReducers ({
    fetchingData : coctailsReducer
})