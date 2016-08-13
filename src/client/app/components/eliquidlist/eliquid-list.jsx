import EliquidListHeader from "./eliquid-list-header";
import EliquidListItems from "./eliquid-list-items";

const EliquidList = ({
    orderBy,
    handleOnSortOrderChanged,
    handleAdd,
    handleListItemClick,
    eLiquids
}) => {
    return (
        <div className="list">
            <EliquidListHeader
                defaultOrder={orderBy}
                handleOnSortOrderChanged={handleOnSortOrderChanged}
                handleAdd={handleAdd}
             />
                }
            <EliquidListItems
                eLiquids={eLiquids}
                handleListItemClick={handleListItemClick}
            />
        </div>
    );
};

export default EliquidList;