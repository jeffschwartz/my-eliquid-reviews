import React from "react";
import EliquidList from "./eliquid-list";

export default class EliquidListIndex extends React.Component {
    render () {
        return (
            <EliquidList defaultOrder="name,a" />
        );
    }
}
