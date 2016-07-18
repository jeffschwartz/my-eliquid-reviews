import React from "react";

export default class EliquidListHeader extends React.Component {
    constructor () {
        super();
        this.state = {
            selectedOption: "name"
        };
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);
    }
    handleOptionsChange (e) {
        console.log(e.target.value);
        this.setState({selectedOption: e.target.value},
            () => console.log("this.state.selectedOption changed. Now = ", this.state.selectedOption));
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
                    <select onChange={this.handleOptionsChange} defaultValue="name">
                        <option value="name">name</option>
                        <option value="category">category</option>
                        <option value="rating">rating</option>
                    </select>
                    <button style={addButtonStyle} onClick={this.handleAddButtonClick}>Add Eliquid</button>
                </div>
            </div>
        );
    }
}
