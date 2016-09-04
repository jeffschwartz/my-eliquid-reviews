export const eLiquidsReducer = (state = {orderBy: "name,a"}, action) => {
    switch (action.type) {
    case "ELIQUIDS_ISFETCHING":
        return { ...state, isFetching: action.isFetching };
    case "ELIQUIDS_SUCCESS":
        return { ...state, eLiquids: action.result };
    case "ELIQUIDS_FAILURE":
        return { ...state, failure: action.error };
    case "ELIQUID_LIST_SORT_ORDER_SELECTED":
        return { ...state, orderBy: action.orderBy };
    case "ELIQUIDS_ADDED_NEW":
        return { ...state, eLiquids: state.eLiquids.concat(action.eLiquid) };
    case "ELIQUID_SELECTED_ID":
        return { ...state, eLiquidSelectedId: action.id };
    default:
        return state;
    }
};

export const eLiquidListComponentReducer = (state = {}, action) => {
    switch (action.type) {
    case "EJUICE_LIST_ORDER_BY":
        return { ...state, orderBy: action.orderBy };
    default:
        return state;
    }
};

