import React from "react";
import NavLink from "./navlink/navlink";

export default class App extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <h1>My Eliquid Reviews</h1>
                </div>
                {this.props.children}
            </div>
        );
    }
}
