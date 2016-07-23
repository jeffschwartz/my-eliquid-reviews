import React from "react";
import {Link} from "react-router";

export default class NavLink extends React.Component {
    render () {
        return (
            <Link {...this.props} onlyActiveOnIndex={true} activeStyle={{color: "#0f0", textDecoration: "none"}} />
        );
    }
}
