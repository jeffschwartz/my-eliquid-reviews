import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {eLiquidsReducer, eLiquidListComponentReducer} from "./reducers";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    eLiquidsState: eLiquidsReducer,
    eLiquidListComponentState: eLiquidListComponentReducer,
    form: formReducer
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()));

export default store;