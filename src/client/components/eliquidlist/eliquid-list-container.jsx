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
        this.props.dispatch(actions.eLiquidSelectedId(id));
        browserHistory.push("/eliquid/" + id);
    };

    componentDidMount () {
        let selectedId = this.props.selectedEliquidId;
        let y;
        if (selectedId) {
            y = document.getElementById(selectedId).parentElement.offsetTop;
            // subtract 72 pixels to clear the fixed header whose height is 72 pixels
            window.scrollTo(0, y - 72);
            // TODO(JS): dispatch an action that clears out the selected item's state
        }
    }

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
    orderBy: state.eLiquidsState.orderBy,
    selectedEliquidId: state.eLiquidsState.eLiquidSelectedId
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