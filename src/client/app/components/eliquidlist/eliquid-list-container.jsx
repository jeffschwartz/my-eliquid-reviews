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
        this.handleOrderByChange = this.handleOrderByChange.bind(this);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        // this.state = {
        //     defaultOrder: "name,a"
        // };
        this.eLiquidList = [];
    }

    handleOrderByChange (orderBy) {
        console.log("handleOrderByChange", orderBy);
        this.setState({defaultOrder: orderBy});
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

const mapDispatchToProps = function (dispatch) {
    return {
        onSortOrderChanged: (orderBy) => {
            console.log("onSortOrderChanged called!");
            dispatch(actions.eliquidListSortOrderSelected(orderBy));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EliquidListContainer);
