const EliquidListHeader = (props) => {
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
    let handleOptionsChange = (e) => {
        // call owning component's handler
        props.orderByChangedHandler(e.target.value);
    };
    let handleAddButtonClick = (e) => {
        console.log("add button clicked");
    };
    return (
        <div style={headerContainerStyle}>
            <h1 style={headerStyle}>Eliquids</h1>
            <div style={buttonContainerStyle}>
                <span>order by: </span>
                <select onChange={handleOptionsChange} defaultValue={props.defaultOrder}>
                    <option value="name,a">name - ascending</option>
                    <option value="name,d">name - descending</option>
                    <option value="category,a">category - ascending</option>
                    <option value="category,d">category - descending</option>
                    <option value="rating,a">rating - ascending</option>
                    <option value="rating,d">rating - descending</option>
                </select>
                <button style={addButtonStyle} onClick={handleAddButtonClick}>Add Eliquid</button>
            </div>
        </div>
    );
};
export default EliquidListHeader;
