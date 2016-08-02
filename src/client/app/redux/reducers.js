// TODO (js): all these should assign to state and return state
export const eLiquidsReducer = function (state = {orderBy: "name,a"}, action) {
    switch (action.type) {
    case "ELIQUIDS_ISFETCHING":
        console.log("eLiquidsReducer action type = ELIQUIDS_ISFETCHING:", action.isFetching);
        return { ...state, isFetching: action.isFetching };
    case "ELIQUIDS_SUCCESS":
        console.log("eLiquidsReducer action type = ELIQUIDS_SUCCESS:", action.result);
        return { ...state, eLiquids: action.result };
    case "ELIQUIDS_FAILURE":
        console.log("eLiquidsReducer action type = ELIQUIDS_FAILURE:", action.error);
        return { ...state, failure: action.error };
    case "ELIQUID_LIST_SORT_ORDER_SELECTED":
        console.log("eLiquidsReducer action type = ELIQUIDS_FAILURE:", action.error);
        return { ...state, orderBy: action.orderBy };
    default:
        console.log("eLiquidsReducer unknown action type:", action.type);
        return state;
    }
};

export const eLiquidListComponentReducer = function (state = {}, action) {
    switch (action.type) {
    case "EJUICE_LIST_ORDER_BY":
        console.log("eLiquidListComponentReducer action type = EJUICE_LIST_ORDER_BY:", action.orderBy);
        return { ...state, orderBy: action.orderBy };
    default:
        console.log("eLiquidListComponentReducer unknown action type:", action.type);
        return state;
    }
};

