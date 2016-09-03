import EliquidListHeader from "./eliquid-list-header";
import EliquidListItems from "./eliquid-list-items";
import Container from "../container/container";

const EliquidList = ({
    orderBy,
    handleOnSortOrderChanged,
    handleAdd,
    handleListItemClick,
    eLiquids
}) => {
    return (
        <div className="page-container">
            <Container>
                <h1 className="page-title">Eliquids</h1>
            </Container>
            <EliquidListHeader
                defaultOrder={orderBy}
                handleOnSortOrderChanged={handleOnSortOrderChanged}
                handleAdd={handleAdd}
                count={eLiquids.length}
                />
            <EliquidListItems
                eLiquids={eLiquids}
                handleListItemClick={handleListItemClick}
                />
        </div>
    );
};

export default EliquidList;