import React from "react";
import {render} from "react-dom";
import EliquidList from "./components/eliquidlist/eliquid-list";

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Eliquid</h1>
                <EliquidList defaultOrder="name,a" />
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
