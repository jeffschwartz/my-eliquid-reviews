import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {eLiquidsReducer, eLiquidListComponentReducer} from "./reducers";

const reducers = combineReducers({
    eLiquidsState: eLiquidsReducer,
    eLiquidListComponentState: eLiquidListComponentReducer
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

console.log("store.getState()", store.getState());

export default store;