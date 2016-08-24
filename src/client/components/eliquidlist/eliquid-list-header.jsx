import Container from "../container/container";

const EliquidListHeader = ({count, handleOnSortOrderChanged, handleAdd, defaultOrder}) => {
    return (
        <Container>
            <div className="list__header-container">
                <div className="list__header-button-container">
                    <span>Count: {count}, </span>
                    <span>Order by: </span>
                    <select
                        onChange={(e) => handleOnSortOrderChanged(e.target.value) }
                        defaultValue={defaultOrder}
                        >
                        <option value="name,a">name - ascending</option>
                        <option value="name,d">name - descending</option>
                        <option value="category,a">category - ascending</option>
                        <option value="category,d">category - descending</option>
                        <option value="rating,a">rating - ascending</option>
                        <option value="rating,d">rating - descending</option>
                    </select>
                    <button
                        className="list__header-button"
                        onClick={() => handleAdd() }>Add Eliquid
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default EliquidListHeader;
