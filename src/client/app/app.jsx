import React from "react";
import {render} from "react-dom";
import EliquidList from "./components/eliquidlist/eliquid-list";

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>My Eliquid Reviews</h1>
                <EliquidList defaultOrder="name,a" />
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
