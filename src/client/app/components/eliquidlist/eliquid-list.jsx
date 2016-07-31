import EliquidListHeader from "./eliquid-list-header";
import EliquidListItems from "./eliquid-list-items";

const EliquidList = (props) => {
    console.log("EliquidList props", props);
    return (
        <div className="list">
            <EliquidListHeader
                defaultOrder={props.defaultOrder}
                orderByChangedHandler={props.orderByChangedHandler}
                addButtonClickHandler={props.addButtonClickHandler}
                 />
            <EliquidListItems
                listItemClickHandler={props.listItemClickHandler}
                eLiquids={props.eLiquids} />
        </div>
    );
};

export default EliquidList;