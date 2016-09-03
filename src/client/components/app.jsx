import React from "react";
import AppNavbar from "../components/navbar/appnavbar";
import NavLink from "../components/navlink/navlink";
import Container from "./container/container";
import Footer from "../components/footer/footer";

const App = (props) => (
    <div>
        <AppNavbar fixedTop />
        <Container>
            <NavLink to="/">Home</NavLink>
        </Container>
        {props.children}
        <Footer />
    </div>
);

export default App;