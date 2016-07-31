import React from "react";
import EliquidListHeader from "./eliquid-list-header";
import EliquidListItems from "./eliquid-list-items";

export default class EliquidList extends React.Component {
    constructor (props) {
        super(props);
        this.handleOrderByChange = this.handleOrderByChange.bind(this);
        this.state = {
            // eliquids: [],
            defaultOrder: this.props.defaultOrder,
            didRender: false
        };
    }
    handleOrderByChange (orderBy) {
        this.setState({defaultOrder: orderBy});
    }
    render () {
        return (
            <div className="list">
                <EliquidListHeader
                    defaultOrder={this.state.defaultOrder} orderByChangedHandler={this.handleOrderByChange} />
                <EliquidListItems orderBy={this.state.defaultOrder} eLiquids={this.props.eLiquids} />
            </div>
        );
    }
}
