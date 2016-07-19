import React from "react";

export default class EliquidListHeader extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedOption: this.props.defaultOrder
        };
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);
    }
    handleOptionsChange (e) {
        this.setState({selectedOption: e.target.value},
            () => console.log("this.state.selectedOption changed. Now = ", this.state.selectedOption));
        // call owning component's handler
        this.props.orderByChangedHandler(e.target.value);
    }
    handleAddButtonClick (e) {
        console.log("add button clicked");
    }
    render () {
        let headerContainerStyle = {
            minHeight: "2em",
            lineHeight: "2em",
            padding: "0 10px",
            borderBottom: "solid 1px #000",
            overflow: "hidden"
        };
        let headerStyle = {
            display: "inline-block",
            margin: "0 20px 0 0",
            fontSize: "2em"
        };
        let buttonContainerStyle = {
            display: "inline-block"
        };
        let addButtonStyle = {
            marginLeft: "20px"
        };
        return (
            <div style={headerContainerStyle}>
                <h1 style={headerStyle}>Eliquids</h1>
                <div style={buttonContainerStyle}>
                    <span>order by: </span>
                    <select onChange={this.handleOptionsChange} defaultValue={this.props.defaultOrder}>
                        <option value="name,a">name - ascending</option>
                        <option value="name,d">name - descending</option>
                        <option value="category,a">category - ascending</option>
                        <option value="category,d">category - descending</option>
                        <option value="rating,a">rating - ascending</option>
                        <option value="rating,d">rating - descending</option>
                    </select>
                    <button style={addButtonStyle} onClick={this.handleAddButtonClick}>Add Eliquid</button>
                </div>
            </div>
        );
    }
}
