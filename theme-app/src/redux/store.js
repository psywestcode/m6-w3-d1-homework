import { legacy_createStore as createStore } from "redux"; // Update import
import rootReducer from "./reducers";

let initialState = {};
const store = createStore(rootReducer, initialState);

export default store;