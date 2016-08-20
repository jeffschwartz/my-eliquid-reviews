import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { browserHistory } from "react-router";
import EliquidList from "./eliquid-list";
import sortEliquids from "../../services/eliquid-sort-service";
import store from "../../redux/store";

class EliquidListContainer extends Component {
    handleAdd () {
        browserHistory.push("/eliquid/create");
    }

    handleListItemClick (id) {
        store.dispatch(actions.eLiquidHasBeenSelected(id))
        .then(() => {
            browserHistory.push("/eliquid/" + id);
        });
    };

    render () {
        const {eLiquids, orderBy, onSortOrderChanged} = this.props;

        return (
            <EliquidList
                eLiquids={sortEliquids(eLiquids, orderBy.split(","))}
                orderBy={orderBy}
                handleOnSortOrderChanged={onSortOrderChanged}
                handleAdd= {this.handleAdd}
                handleListItemClick={this.handleListItemClick}
            />
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