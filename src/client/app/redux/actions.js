import eliquidService from "../services/eliquid-data-service";

export function eLiquidsIsFetching (isFetching) {
    return {
        type: "ELIQUIDS_ISFETCHING",
        isFetching
    };
};

export function eLiquidsSuccess (result) {
    return {
        type: "ELIQUIDS_SUCCESS",
        result
    };
};

export function eLiquidsFailure (error) {
    return {
        type: "ELIQUIDS_FAILURE",
        error
    };
};

export function eLiquidListSortOrderSelected (orderBy) {
    return {
        type: "ELIQUID_LIST_SORT_ORDER_SELECTED",
        orderBy
    };
}

// load eLiquids asynchronously and then
// dispatch ELIQUIDS_SUCCESS or ELIQUIDS_ERROR
export function bootstrapEliquids () {
    return function (dispatch) {
        dispatch(eLiquidsIsFetching(true));
        return eliquidService.get().then(
            result => {
                dispatch(eLiquidsSuccess(result));
                dispatch(eLiquidsIsFetching(false));
            },
            error => {
                dispatch(eLiquidsFailure(error));
            }
        );
    };
}