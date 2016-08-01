import React from "react";
import { connect } from "react-redux";
import sortEliquids from "../../services/eliquid-sort-service";
import {bootstrapEliquids} from "../../redux/actions";
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
        this.state = {
            defaultOrder: "name,a"
        };
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
            store.dispatch(bootstrapEliquids());
        };
    }
    render () {
        if (!this.props.eLiquids) {
            return false;
        }
        return (
            <EliquidList
                eLiquids={sortEliquids(this.props.eLiquids, this.state.defaultOrder.split(","))}
                orderByChangedHandler={this.handleOrderByChange}
                addButtonClickHandler={this.handleAddButtonClick}
                listItemClickHandler={this.handleListItemClick}
                defaultOrder={this.state.defaultOrder} />
        );
    }
}

const mapStateToProps = function (state) {
    return {
        eLiquids: state.eLiquidsState.eLiquids
    };
};

export default connect(mapStateToProps)(EliquidListContainer);
