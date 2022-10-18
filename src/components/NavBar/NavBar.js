import React from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();

    if (location.pathname === "/" || location.pathname === "/cadastro") {
        return <></>;
    }

    return <div>NavBar</div>;
}

export default NavBar;
