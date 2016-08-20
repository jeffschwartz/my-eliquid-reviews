import { connect } from "react-redux";
import EliquidDetails from "./eliquid-details";

const mapStateToProps = function (state) {
    return {
        selectedEliquid: state.eLiquidsState.eLiquidSelected
    };
};

export default connect(
    mapStateToProps
)(EliquidDetails);

