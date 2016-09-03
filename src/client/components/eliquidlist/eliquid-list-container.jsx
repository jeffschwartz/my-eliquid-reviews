import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { browserHistory } from "react-router";
import EliquidList from "./eliquid-list";
import sortEliquids from "../../services/eliquid-sort-service";

class EliquidListContainer extends Component {
    handleAdd () {
        browserHistory.push("/eliquid/create");
    }

    handleListItemClick (id) {
        this.props.dispatch(actions.eLiquidHasBeenSelected(id))
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
                handleListItemClick={this.handleListItemClick.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    eLiquids: state.eLiquidsState.eLiquids,
    orderBy: state.eLiquidsState.orderBy
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        onSortOrderChanged: actions.eLiquidListSortOrderSelected
    }, dispatch),
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EliquidListContainer);