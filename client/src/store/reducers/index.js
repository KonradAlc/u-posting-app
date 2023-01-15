import { useDispatch } from "react-redux";
import { combineReducers } from "redux";

//import store from "..";

const rootReducer = combineReducers({});

export const useAppDispatch = () => useDispatch();
export default rootReducer;
