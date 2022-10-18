import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();

    if (location.pathname === "/" || location.pathname === "/cadastro") {
        return <></>;
    }

    return <div>Footer</div>;
}

export default Footer;
