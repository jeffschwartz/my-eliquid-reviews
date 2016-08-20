import {Component} from "react";
import { connect } from "react-redux";
import EliquidDetails from "./eliquid-details";

class EliquidDetailsContainer extends Component {
    render () {
        const { selectedEliquid } = this.props;
        return (
            <EliquidDetails selectedEliquid={selectedEliquid} />
        );
    }
}

const mapStateToProps = function (state) {
    return {
        selectedEliquid: state.eLiquidsState.eLiquidSelected
    };
};

export default connect(
    mapStateToProps
)(EliquidDetailsContainer);

