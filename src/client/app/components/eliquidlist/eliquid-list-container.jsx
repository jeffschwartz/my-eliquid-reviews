import React from "react";
import { connect } from "react-redux";
import {bootstrapEliquids} from "../../redux/actions";
import store from "../../redux/store";
import EliquidList from "./eliquid-list";

class EliquidListContainer extends React.Component {
    componentDidMount () {
        if (!this.props.eLiquids) {
            store.dispatch(bootstrapEliquids());
        }
    }
    render () {
        if (!this.props.eLiquids) {
            return false;
        }
        // console.log("EliquidListContainer yada render this.props", this.props);
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