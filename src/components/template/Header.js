import {NavLink} from "react-router-dom";
import React, {Component} from "react";

class Header extends Component {

    render() {
        return (
            <nav>
                <NavLink to="/">Link1</NavLink>
                <NavLink to="/router2">Link2</NavLink>
            </nav>
        );
    }
}

export default Header;