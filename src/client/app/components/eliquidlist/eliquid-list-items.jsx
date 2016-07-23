import {browserHistory} from "react-router";

const EliquidListItems = (props) => {
    function rowClickedHandler (e, id) {
        let url = "/eliquid/" + id;
        browserHistory.push(url);
    }
    props.eliquids.sort((a, b) => {
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
    let rows = props.eliquids.map((item, i) => <tr id={item.id} style={{cursor: "pointer"}} onClick={(e) => rowClickedHandler(e, item.id)} key={i}><td>{item.name}</td><td>{item.company}</td><td>{item.category}</td><td>{item.rating}</td><td>{item.vgpg}</td><td>{item.nic}</td></tr>);
    return (
        <div style={{width: "100%"}}>
            <table style={{width: "100%"}}>
                <thead><tr><th style={{textAlign: "left"}}>Name</th><th style={{textAlign: "left"}}>Company</th><th style={{textAlign: "left"}}>Category</th><th style={{textAlign: "left"}}>Rating</th><th style={{textAlign: "left"}}>VG/PG</th><th style={{textAlign: "left"}}>Nic</th></tr></thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default EliquidListItems;
