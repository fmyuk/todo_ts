import { combineReducers } from "redux";
import tasksModule from "./modules/tasksModule";

const rootReducer = combineReducers({
  tasks: tasksModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;