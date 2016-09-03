import {dangerouslySetInnerHTML} from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Panel from "react-bootstrap/lib/Panel";
import {replaceLineBreaksWithBreakTags} from "../../services/text-services";

let spliceUp = (eLiquids) => {
    console.log("sliceUp called", eLiquids);
    let rs = [];
    while (eLiquids.length > 4) {
        rs.push(eLiquids.splice(0, 4));
    }
    if (eLiquids.length) {
        rs.push(eLiquids);
    }
    return rs;
};

let makeRows = (rows, handleListItemClick) => {
    let rs = [];
    rows.forEach((row, i) => {
        let cols = [];
        row.forEach((item, i) => {
            cols.push(
                (
                    <Col key={i} md={3}>
                        {console.log(item.name) }
                        <Panel
                            id={item._id}
                            key={i}
                            header={<h1>{item.name}</h1>}
                            onClick={() => handleListItemClick(item._id) } >
                            Rating: {item.rating}<br/>
                            Category: {item.category}<br/>
                            Compay: {item.company}<br/>
                            VG/PG: {item.vgpg}, NIC: {item.nic}<br/>
                            Review: <p dangerouslySetInnerHTML={{ __html: replaceLineBreaksWithBreakTags(item.review) }}></p>
                        </Panel>
                    </Col>
                )
            );
        });
        rs.push((
            <Row key={i}>
                {cols}
            </Row>
        ));
    });
    console.log("makeRows", rs);
    return rs;
};
const EliquidListItems = ({eLiquids, handleListItemClick}) => {
    let spliced;
    let rows;
    if (!eLiquids.length) {
        return (
            <div>nothing to display at this time</div>
        );
    }
    spliced = spliceUp(eLiquids);
    console.log("spliced", spliced);
    rows = makeRows(spliced, handleListItemClick);
    console.log("rows", rows);
    return (
        <div className="page-container">
            <Grid>
                {rows}
            </Grid>
        </div>
    );
};

export default EliquidListItems;
