import {Component} from "react";
import {connect} from "react-redux";
import EliquidDetails from "./eliquid-details";
import {browserHistory} from "react-router";

class EliquidDetailsContainer extends Component {
    handleDone () {
        browserHistory.push("/");
    }
    render () {
        const {selectedEliquid} = this.props;
        return (
            <EliquidDetails
                selectedEliquid={selectedEliquid}
                handleDone={this.handleDone.bind(this)} />
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

