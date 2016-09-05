import React from "react";
import AppNavbar from "../components/navbar/appnavbar";
import NavLink from "../components/navlink/navlink";
import Container from "./container/container";
import Footer from "../components/footer/footer";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const App = (props) => (
    <div>
        <AppNavbar fixedTop />
        <Container>
            <NavLink to="/">Home</NavLink>
        </Container>
        <ReactCSSTransitionGroup
            transitionName="initialmount"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500} >
            {React.cloneElement(props.children, { key: Date.now() }) }
        </ReactCSSTransitionGroup>

        <Footer />
    </div>
);

export default App;