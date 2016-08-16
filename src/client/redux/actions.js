import eliquidService from "../services/eliquid-data-service";

export const eLiquidsIsFetching = (isFetching) => {
    return {
        type: "ELIQUIDS_ISFETCHING",
        isFetching
    };
};

export const eLiquidsSuccess = (result) => {
    return {
        type: "ELIQUIDS_SUCCESS",
        result
    };
};

export const eLiquidsFailure = (error) => {
    return {
        type: "ELIQUIDS_FAILURE",
        error
    };
};

export const eLiquidsAddedNew = (eLiquid) => {
    return {
        type: "ELIQUIDS_ADDED_NEW",
        eLiquid
    };
};

export const eLiquidListSortOrderSelected = (orderBy) => {
    return {
        type: "ELIQUID_LIST_SORT_ORDER_SELECTED",
        orderBy
    };
};

// loads eLiquids asynchronously & then dispatches either
// ELIQUIDS_SUCCESS or ELIQUIDS_ERROR based on success or
// failure, respectively, of the promise
export const bootstrapEliquids = () => {
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
};