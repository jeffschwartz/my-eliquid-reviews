import React from "react";
import { connect } from "react-redux";
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
    sortEliquids () {
        let sortArgs = this.state.defaultOrder.split(",");
        let sortOn = sortArgs[0];
        let sortAscending = sortArgs[1] === "a";

        this.eLiquidList = this.props.eLiquids.slice(0);
        switch (sortOn) {
        case "name":
            this.eLiquidList.sort((a, b) => {
                if (a.name > b.name) {
                    return sortAscending ? 1 : -1;
                }
                if (a.name < b.name) {
                    return sortAscending ? -1 : 1;
                }
                if (parseFloat(a.rating) > parseFloat(b.rating)) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.rating) < parseFloat(b.rating)) {
                    return sortAscending ? -1 : 1;
                }
                if (a.category > b.category) {
                    return sortAscending ? 1 : -1;
                }
                if (a.category > b.category) {
                    return sortAscending ? -1 : 1;
                }
                if (a.company > b.company) {
                    return sortAscending ? 1 : -1;
                }
                if (a.company > b.company) {
                    return sortAscending ? -1 : 1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? 1 : -1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? -1 : 1;
                }
                if (parseFloat(a.nic) > parseFloat(b.nic)) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.nic) > parseFloat(b.nic)) {
                    return sortAscending ? -1 : 1;
                }
            });
            break;
        case "rating":
            this.eLiquidList.sort((a, b) => {
                if (parseFloat(a.rating) > parseFloat(b.rating)) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.rating) < parseFloat(b.rating)) {
                    return sortAscending ? -1 : 1;
                }
                if (a.name > b.name) {
                    return sortAscending ? 1 : -1;
                }
                if (a.name < b.name) {
                    return sortAscending ? -1 : 1;
                }
                if (a.category > b.category) {
                    return sortAscending ? 1 : -1;
                }
                if (a.category > b.category) {
                    return sortAscending ? -1 : 1;
                }
                if (a.company > b.company) {
                    return sortAscending ? 1 : -1;
                }
                if (a.company > b.company) {
                    return sortAscending ? -1 : 1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? 1 : -1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? -1 : 1;
                }
                if (parseFloat(a.nic) > parseFloat(b.nic)) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.nic) > parseFloat(b.nic)) {
                    return sortAscending ? -1 : 1;
                }
            });
            break;
        case "category":
            this.eLiquidList.sort((a, b) => {
                if (a.category > b.category) {
                    return sortAscending ? 1 : -1;
                }
                if (a.category > b.category) {
                    return sortAscending ? -1 : 1;
                }
                if (a.name > b.name) {
                    return sortAscending ? 1 : -1;
                }
                if (a.name < b.name) {
                    return sortAscending ? -1 : 1;
                }
                if (parseFloat(a.rating) > parseFloat(b.rating)) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.rating) < parseFloat(b.rating)) {
                    return sortAscending ? -1 : 1;
                }
                if (a.company > b.company) {
                    return sortAscending ? 1 : -1;
                }
                if (a.company > b.company) {
                    return sortAscending ? -1 : 1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? 1 : -1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? -1 : 1;
                }
                if (parseFloat(a.nic) > parseFloat(b.nic)) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.nic) > parseFloat(b.nic)) {
                    return sortAscending ? -1 : 1;
                }
            });
            break;
        }
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
            store.dispatch(bootstrapEliquids()).then(() => this.sortEliquids());
        };
    }
    render () {
        if (!this.props.eLiquids) {
            return false;
        }
        this.sortEliquids();
        return (
            <EliquidList
                eLiquids={this.eLiquidList}
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
