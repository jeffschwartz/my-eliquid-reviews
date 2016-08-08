export const eLiquidsReducer = function (state = {orderBy: "name,a"}, action) {
    switch (action.type) {
    case "ELIQUIDS_ISFETCHING":
        return { ...state, isFetching: action.isFetching };
    case "ELIQUIDS_SUCCESS":
        return { ...state, eLiquids: action.result };
    case "ELIQUIDS_FAILURE":
        return { ...state, failure: action.error };
    case "ELIQUID_LIST_SORT_ORDER_SELECTED":
        return { ...state, orderBy: action.orderBy };
    default:
        return state;
    }
};

export const eLiquidListComponentReducer = function (state = {}, action) {
    switch (action.type) {
    case "EJUICE_LIST_ORDER_BY":
        return { ...state, orderBy: action.orderBy };
    default:
        return state;
    }
};

