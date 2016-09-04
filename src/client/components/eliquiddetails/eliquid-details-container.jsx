import {Component} from "react";
import {connect} from "react-redux";
import EliquidDetails from "./eliquid-details";
import {browserHistory} from "react-router";
import * as actions from "../../redux/actions";
import eliquidService from "../../services/eliquid-data-service";

class EliquidDetailsContainer extends Component {
    constructor () {
        super();
        this.state = {
            selectedEliquid: null
        };
    }
    handleDone () {
        browserHistory.push("/");
    }
    componentWillMount () {
        /**
         * If user entered the url directly or hit refresh then
         * we need to dispatch the eLiquidSelectedId action to set
         * the id of the selected eLiquid.
         */
        let id = this.props.params.id;
        if (!this.props.selectedEliquidId) {
            this.props.dispatch(actions.eLiquidSelectedId(id));
        }
        eliquidService.getById(id)
            .then((result) => this.setState({ selectedEliquid: result }));
    }
    render () {
        // delay rendering until the selected eliquid is returned from async fetch
        if (!this.state.selectedEliquid) {
            return false;
        }
        return (
            <EliquidDetails
                selectedEliquid={this.state.selectedEliquid}
                handleDone={this.handleDone.bind(this)} />
        );
    }
}

const mapStateToProps = function (state) {
    return {
        selectedEliquidId: state.eLiquidsState.eLiquidSelectedId
    };
};

export default connect(
    mapStateToProps
)(EliquidDetailsContainer);

