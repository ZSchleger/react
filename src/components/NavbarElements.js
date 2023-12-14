import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./Navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" >
                        Home
                    </NavLink>
                    <NavLink to="/Resume" >
                        Resume
                    </NavLink>
                    <NavLink to="/Projects" >
                        Projects
                    </NavLink>
                    <NavLink to="/AboutMe" >
                        About Me
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
