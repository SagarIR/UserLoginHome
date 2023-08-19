import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/authReducer";
import { jobReducer } from "./reducers/jobReducer";

const rootReducer = combineReducers({
  user: userReducer,
  job: jobReducer,
});

export const store = createStore(rootReducer);
