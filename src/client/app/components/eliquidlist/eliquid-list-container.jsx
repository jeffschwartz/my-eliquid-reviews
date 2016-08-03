import React from "react";
import { connect } from "react-redux";
import sortEliquids from "../../services/eliquid-sort-service";
import * as actions from "../../redux/actions";
import store from "../../redux/store";
import EliquidList from "./eliquid-list";
import {browserHistory} from "react-router";

class EliquidListContainer extends React.Component {
    constructor (props) {
        super(props);
        console.log("props", props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.eLiquidList = [];
    }
    handleAddButtonClick (e) {
        browserHistory.push("/eliquid/create");
    };
    handleListItemClick (e, id) {
        let url = "/eliquid/" + id;
        browserHistory.push(url);
    }
    componentDidMount () {
        if (!this.props.eLiquids) {
            store.dispatch(actions.bootstrapEliquids());
        };
    }
    render () {
        if (!this.props.eLiquids) {
            return false;
        }
        console.log("container render", this.props);
        return (
            <EliquidList
                eLiquids={sortEliquids(this.props.eLiquids, this.props.orderBy.split(","))}
                orderByChangedHandler={this.props.onSortOrderChanged}
                addButtonClickHandler={this.handleAddButtonClick}
                listItemClickHandler={this.handleListItemClick}
                defaultOrder={this.props.orderBy} />
        );
    }
}

const mapStateToProps = function (state) {
    return {
        eLiquids: state.eLiquidsState.eLiquids,
        orderBy: state.eLiquidsState.orderBy
    };
};

export default connect(
    mapStateToProps,
    // see https://egghead.io/lessons/javascript-redux-using-mapdispatchtoprops-shorthand-notation
    // for an explanation of using mapDispatchToProps shorthand notation as per below for mapping dispatch to props.
    { onSortOrderChanged: actions.eLiquidListSortOrderSelected }
)(EliquidListContainer);