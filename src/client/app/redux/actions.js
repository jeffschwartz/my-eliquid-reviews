import eliquidService from "../services/eliquid-service";

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

// load eLiquids asynchronously and then
// dispatch ELIQUIDS_SUCCESS or ELIQUIDS_ERROR
export function bootstrapEliquids () {
    return function (dispatch) {
        dispatch(eLiquidsIsFetching(true));
        eliquidService.get().then(
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