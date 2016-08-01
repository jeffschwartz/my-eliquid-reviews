const EliquidListHeader = ({orderByChangedHandler, addButtonClickHandler, defaultOrder}) => {
    let handleOptionsChange = (e) => {
        // call owning component's handler
        orderByChangedHandler(e.target.value);
    };
    let handleAddButtonClick = (e) => {
        addButtonClickHandler(e);
    };
    return (
        <div className="list__header-container">
            <h1 className="list__header">Eliquids</h1>
            <div className="list__header-button-container">
                <span>order by: </span>
                <select onChange={handleOptionsChange} defaultValue={defaultOrder}>
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
