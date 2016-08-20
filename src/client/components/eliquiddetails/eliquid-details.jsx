import {Component} from "react";

class EliquidDetail extends Component {
    render () {
        let propValue = this.props.propValue;
        let label = this.props.label;
        return (
            <div>
                <span>{label}: </span><span>{propValue}</span>
            </div>
        );
    }
}

const EliquidDetails = props => {
    const {selectedEliquid} = props;
    console.log("selectedEliquid", selectedEliquid);
    return (
            <div>
                <h2>Eliquid Details</h2>
                <div>
                    <button>Edit</button> <button>Delete</button>
                </div>
                <div>
                    <EliquidDetail label="Name" propValue={selectedEliquid.name} />
                    <EliquidDetail label="Company" propValue={selectedEliquid.company} />
                    <EliquidDetail label="Category" propValue={selectedEliquid.category} />
                    <EliquidDetail label="Rating" propValue={selectedEliquid.rating} />
                    <EliquidDetail label="VGPG" propValue={selectedEliquid.vgpg} />
                    <EliquidDetail label="Nic" propValue={selectedEliquid.nic} />
                </div>
            </div>
    );
};

export default EliquidDetails;