import React from "react";
import EliquidListHeader from "./eliquid-list-header";

export default class EliquidList extends React.Component {
    render () {
        let containerStyle = {
            border: "solid 1px #000",
            padding: "10px"
        };
        return (
            <div style={containerStyle}>
                <EliquidListHeader />
            </div>
        );
    }
}
