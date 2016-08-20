import eliquidService from "../services/eliquid-data-service";

export const eLiquidsIsFetching = isFetching => ({
    type: "ELIQUIDS_ISFETCHING",
    isFetching
});

export const eLiquidsSuccess = result => ({
    type: "ELIQUIDS_SUCCESS",
    result
});

export const eLiquidsFailure = error => ({
    type: "ELIQUIDS_FAILURE",
    error
});

export const eLiquidsAddedNew = eLiquid => ({
    type: "ELIQUIDS_ADDED_NEW",
    eLiquid
});

export const eLiquidListSortOrderSelected = orderBy => ({
    type: "ELIQUID_LIST_SORT_ORDER_SELECTED",
    orderBy
});

// loads eLiquids asynchronously & then dispatches either
// ELIQUIDS_SUCCESS or ELIQUIDS_ERROR based on success or
// failure, respectively, of the promise
export const bootstrapEliquids = () => {
    return function (dispatch) {
        dispatch(eLiquidsIsFetching(true));
        return eliquidService.get().then(
            result => {
                console.log("bootstrap result", result);
                dispatch(eLiquidsSuccess(result.data.docs));
                dispatch(eLiquidsIsFetching(false));
            },
            error => {
                dispatch(eLiquidsFailure(error));
            }
        );
    };
};