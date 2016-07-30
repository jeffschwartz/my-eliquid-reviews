import React from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import {eLiquidsSuccess} from "../../redux/actions";
import eliquidService from "../../services/eliquid-service";
import EliquidList from "./eliquid-list";

class EliquidListContainer extends React.Component {
    componentDidMount () {
        if (!this.props.eLiquids) {
            console.log("calling eliquidService.get()");
            eliquidService.get().then(result => {
                console.log("EliquidListContainer promise resolved successfully");
                store.dispatch(eLiquidsSuccess(result));
            });
        }
    }
    render () {
        if (!this.props.eLiquids) {
            return false;
        }
        console.log("EliquidListContainer yada render this.props", this.props);
        return (
            <EliquidList eLiquids={this.props.eLiquids} defaultOrder="name,a" />
        );
    }
}

const mapStateToProps = function (state) {
    return {
        eLiquids: state.eLiquidsState.eLiquids
    };
};

export default connect(mapStateToProps)(EliquidListContainer);