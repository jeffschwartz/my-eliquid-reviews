import React from "react";
import eliquidService from "../../services/eliquid-data-service";

class EliquidDetail extends React.Component {
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

export default class EliquidDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            eliquid: null
        };
    }
    componentDidMount () {
        console.log("this.props", this.props);
        eliquidService.getById(this.props.params.id).then((eliquid) => {
            this.setState({eliquid: eliquid});
        });
    }
    render () {
        // don't render until eliquidService.getById has resolved
        if (!this.state.eliquid) {
            return false;
        }
        return (
            <div>
                <h2>Eliquid Details</h2>
                <div>
                    <button>Edit</button> <button>Delete</button>
                </div>
                <div>
                    <EliquidDetail label="Name" propValue={this.state.eliquid.name} />
                    <EliquidDetail label="Company" propValue={this.state.eliquid.company} />
                    <EliquidDetail label="Category" propValue={this.state.eliquid.category} />
                    <EliquidDetail label="Rating" propValue={this.state.eliquid.rating} />
                    <EliquidDetail label="VGPG" propValue={this.state.eliquid.vgpg} />
                    <EliquidDetail label="Nic" propValue={this.state.eliquid.nic} />
                </div>
            </div>
        );
    }
}
