import EliquidListHeader from "./eliquid-list-header";
import EliquidListItems from "./eliquid-list-items";

const EliquidList = ({defaultOrder, orderByChangedHandler, addButtonClickHandler, listItemClickHandler, eLiquids}) => {
    return (
        <div className="list">
            <EliquidListHeader
                defaultOrder={defaultOrder}
                orderByChangedHandler={orderByChangedHandler}
                addButtonClickHandler={addButtonClickHandler}
                 />
            <EliquidListItems
                listItemClickHandler={listItemClickHandler}
                eLiquids={eLiquids} />
        </div>
    );
};

export default EliquidList;