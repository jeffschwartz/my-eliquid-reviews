import React from "react";
import EliquidListHeader from "./eliquid-list-header";
import EliquidListItems from "./eliquid-list-items";
import eliquidService from "../../services/eliquid-service";

export default class EliquidList extends React.Component {
    constructor (props) {
        super(props);
        this.handleOrderByChange = this.handleOrderByChange.bind(this);
        this.state = {
            eliquids: [],
            defaultOrder: this.props.defaultOrder,
            didRender: false
        };
    }
    componentDidMount () {
        eliquidService.get().then(eliquids => {
            // this.setState({eliquids: eliquids});
            // console.log("componentWillMount - eliquids", this.state.eliquids);
            this.setState({eliquids: eliquids});
        });
    }
    // componentDidUpdate () {
    //     console.log("componentDidUpdate", this.state.eliquids);
    //     console.log("component did render", this.state.didRender);
    // }
    handleOrderByChange (orderBy) {
        // console.log("handleOrderByChange called", orderBy);
        this.setState({defaultOrder: orderBy});
    }
    render () {
        let containerStyle = {
            borderTop: "solid 1px #000",
            padding: "10px"
        };
        return (
            <div style={containerStyle}>
                <EliquidListHeader
                    defaultOrder={this.state.defaultOrder} orderByChangedHandler={this.handleOrderByChange} />
                <EliquidListItems orderBy={this.state.defaultOrder} eliquids={this.state.eliquids} />
            </div>
        );
    }
}
