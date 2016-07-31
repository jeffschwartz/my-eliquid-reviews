import {browserHistory} from "react-router";

const EliquidListItems = (props) => {
    let eLiquidList = props.eLiquids.slice(0);

    function rowClickedHandler (e, id) {
        let url = "/eliquid/" + id;
        browserHistory.push(url);
    }

    function sortEliquids () {
        let sortArgs = props.orderBy.split(",");
        let sortOn = sortArgs[0];
        let sortAscending = sortArgs[1] === "a";

        switch (sortOn) {
        case "name":
            eLiquidList.sort((a, b) => {
                if (a.name > b.name) {
                    return sortAscending ? 1 : -1;
                }
                if (a.name < b.name) {
                    return sortAscending ? -1 : 1;
                }
                if (a.rating > b.rating) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.rating) < parseFloat(b.rating)) {
                    return sortAscending ? -1 : 1;
                }
                if (a.category > b.category) {
                    return sortAscending ? 1 : -1;
                }
                if (a.category > b.category) {
                    return sortAscending ? -1 : 1;
                }
                if (a.company > b.company) {
                    return sortAscending ? 1 : -1;
                }
                if (a.company > b.company) {
                    return sortAscending ? -1 : 1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? 1 : -1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? -1 : 1;
                }
                if (a.nic > b.nic) {
                    return sortAscending ? 1 : -1;
                }
                if (a.nic > b.nic) {
                    return sortAscending ? -1 : 1;
                }
            });
            break;
        case "rating":
            eLiquidList.sort((a, b) => {
                if (a.rating > b.rating) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.rating) < parseFloat(b.rating)) {
                    return sortAscending ? -1 : 1;
                }
                if (a.name > b.name) {
                    return sortAscending ? 1 : -1;
                }
                if (a.name < b.name) {
                    return sortAscending ? -1 : 1;
                }
                if (a.category > b.category) {
                    return sortAscending ? 1 : -1;
                }
                if (a.category > b.category) {
                    return sortAscending ? -1 : 1;
                }
                if (a.company > b.company) {
                    return sortAscending ? 1 : -1;
                }
                if (a.company > b.company) {
                    return sortAscending ? -1 : 1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? 1 : -1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? -1 : 1;
                }
                if (a.nic > b.nic) {
                    return sortAscending ? 1 : -1;
                }
                if (a.nic > b.nic) {
                    return sortAscending ? -1 : 1;
                }
            });
            break;
        case "category":
            eLiquidList.sort((a, b) => {
                if (a.category > b.category) {
                    return sortAscending ? 1 : -1;
                }
                if (a.category > b.category) {
                    return sortAscending ? -1 : 1;
                }
                if (a.name > b.name) {
                    return sortAscending ? 1 : -1;
                }
                if (a.name < b.name) {
                    return sortAscending ? -1 : 1;
                }
                if (a.rating > b.rating) {
                    return sortAscending ? 1 : -1;
                }
                if (parseFloat(a.rating) < parseFloat(b.rating)) {
                    return sortAscending ? -1 : 1;
                }
                if (a.company > b.company) {
                    return sortAscending ? 1 : -1;
                }
                if (a.company > b.company) {
                    return sortAscending ? -1 : 1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? 1 : -1;
                }
                if (a.vgpg > b.vgpg) {
                    return sortAscending ? -1 : 1;
                }
                if (a.nic > b.nic) {
                    return sortAscending ? 1 : -1;
                }
                if (a.nic > b.nic) {
                    return sortAscending ? -1 : 1;
                }
            });
            break;
        }
    }

    sortEliquids();

    // props.eLiquids.sort((a, b) => {
    //     let sortArgs = props.orderBy.split(",");
    //     let sortOn = sortArgs[0];
    //     let sortAscending = sortArgs[1] === "a";
    //     console.log("sortOn", sortOn);
    //     if (sortAscending) {
    //         if (a[sortOn] < b[sortOn]) {
    //             return -1;
    //         }
    //         if (a[sortOn] > b[sortOn]) {
    //             return 1;
    //         }
    //         return 0;
    //     } else {
    //         if (a[sortOn] > b[sortOn]) {
    //             return -1;
    //         }
    //         if (a[sortOn] < b[sortOn]) {
    //             return 1;
    //         }
    //         return 0;
    //     }
    // });

    // let rows = props.eLiquids.map((item, i) =>
    let rows = eLiquidList.map((item, i) =>
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
                    <th className="list__items-header list__items-header--green">Name</th>
                    <th className="list__items-header list__items-header--green">Company</th>
                    <th className="list__items-header list__items-header--green">Category</th>
                    <th className="list__items-header list__items-header--green">Rating</th>
                    <th className="list__items-header list__items-header--green">VG/PG</th>
                    <th className="list__items-header list__items-header--green">Nic</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default EliquidListItems;
