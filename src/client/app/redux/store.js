import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const eLiquidsReducer = function (state = {}, action) {
    switch (action.type) {
    case "ELIQUIDS_SUCCESS":
        console.log("eLiquidsReducer action type = ELIQUIDS_SUCCESS:", action.result);
        return { ...state, eLiquids: action.result };
    default:
        console.log("eLiquidsReducer unknown action type:", action.type);
        return state;
    }
};

const eLiquidListComponentReducer = function (state = {}, action) {
    switch (action.type) {
    case "EJUICE_LIST_ORDER_BY":
        console.log("eLiquidListComponentReducer action type = EJUICE_LIST_ORDER_BY:", action.orderBy);
        return { ...state, orderBy: action.orderBy };
    default:
        console.log("eLiquidListComponentReducer unknown action type:", action.type);
        return state;
    }
};

const reducers = combineReducers({
    eLiquidsState: eLiquidsReducer,
    eLiquidListComponentState: eLiquidListComponentReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

console.log("store.getState()", store.getState());

export default store;