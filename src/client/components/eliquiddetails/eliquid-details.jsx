import Container from "../container/container";
import Panel from "react-bootstrap/lib/Panel";
import Button from "react-bootstrap/lib/Button";

const EliquidDetails = props => {
    const {selectedEliquid, handleDone} = props;
    return (
        <div className="page-container">
            <Container>
                <h1 className="page-title">Details</h1>
            </Container>
            <Container>
                <div className="list__header-container">
                    <Panel
                        id={selectedEliquid._id}
                        header={<h1>{selectedEliquid.name}</h1>}>
                        Rating: {selectedEliquid.rating}<br/>
                        Category: {selectedEliquid.category}<br/>
                        Compay: {selectedEliquid.company}<br/>
                        VG/PG: {selectedEliquid.vgpg}, NIC: {selectedEliquid.nic}<br/>
                        Review: <p>{selectedEliquid.review}</p><br/>
                        <Button
                            type="button"
                            bsStyle="primary"
                            onClick={handleDone}>
                            Done
                        </Button>
                    </Panel>
                </div>
            </Container>
        </div>
    );
};

export default EliquidDetails;