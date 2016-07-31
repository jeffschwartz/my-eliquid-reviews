import {browserHistory} from "react-router";

const EliquidListItems = (props) => {
    function rowClickedHandler (e, id) {
        let url = "/eliquid/" + id;
        browserHistory.push(url);
    }
    props.eLiquids.sort((a, b) => {
        let sortArgs = props.orderBy.split(",");
        let sortOn = sortArgs[0];
        let sortAscending = sortArgs[1] === "a";
        if (sortAscending) {
            if (a[sortOn] < b[sortOn]) {
                return -1;
            }
            if (a[sortOn] > b[sortOn]) {
                return 1;
            }
            return 0;
        } else {
            if (a[sortOn] > b[sortOn]) {
                return -1;
            }
            if (a[sortOn] < b[sortOn]) {
                return 1;
            }
            return 0;
        }
    });
    let rows = props.eLiquids.map((item, i) =>
        <tr id={item.id} className="list__item" onClick={(e) => rowClickedHandler(e, item.id)} key={i}>
            <td className="list__item-detail">{item.name}</td>
            <td className="list__item-detail">{item.company}</td>
            <td className="list__item-detail">{item.category}</td>
            <td className="list__item-detail">{item.rating}</td>
            <td className="list__item-detail">{item.vgpg}</td>
            <td className="list__item-detail">{item.nic}</td>
        </tr>);
    return (
        <table className="list__items-container">
            <thead>
                <tr>
                    <th className="list__items-header">Name</th>
                    <th className="list__items-header">Company</th>
                    <th className="list__items-header">Category</th>
                    <th className="list__items-header">Rating</th>
                    <th className="list__items-header">VG/PG</th>
                    <th className="list__items-header">Nic</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default EliquidListItems;
