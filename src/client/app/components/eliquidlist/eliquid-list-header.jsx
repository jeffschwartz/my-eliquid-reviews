import {browserHistory} from "react-router";

const EliquidListHeader = (props) => {
    let handleOptionsChange = (e) => {
        // call owning component's handler
        props.orderByChangedHandler(e.target.value);
    };
    let handleAddButtonClick = (e) => {
        browserHistory.push("/eliquid/create");
    };
    return (
        <div className="list__header-container">
            <h1 className="list__header">Eliquids</h1>
            <div className="list__header-button-container">
                <span>order by: </span>
                <select onChange={handleOptionsChange} defaultValue={props.defaultOrder}>
                    <option value="name,a">name - ascending</option>
                    <option value="name,d">name - descending</option>
                    <option value="category,a">category - ascending</option>
                    <option value="category,d">category - descending</option>
                    <option value="rating,a">rating - ascending</option>
                    <option value="rating,d">rating - descending</option>
                </select>
                <button className="list__header-button" onClick={handleAddButtonClick}>Add Eliquid</button>
            </div>
        </div>
    );
};
export default EliquidListHeader;
