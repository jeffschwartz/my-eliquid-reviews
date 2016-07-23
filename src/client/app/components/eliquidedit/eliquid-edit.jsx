import React from "react";

export default class EliquidEdit extends React.Component {
    render () {
        return (
            <div>
                <h2>Edit This Eliquid</h2>
                {this.props.params.id}
            </div>
        );
    }
}
