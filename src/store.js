import {createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducers";
import ApiReducer from "./reducers/ApiReducers";

const reducer=combineReducers({
Todo:TodoReducer,
Api:ApiReducer 
});
const initisalState={};

const middleware=[thunk];

export const store= createStore(
    reducer,
    initisalState,
    composeWithDevTools(applyMiddleware(...middleware))
);