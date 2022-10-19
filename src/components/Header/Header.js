import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../common/contexts/UserContext";
import { StyledHeader } from "./style";

function Header() {
    const location = useLocation();
    const user = useContext(UserContext);

    if (location.pathname === "/" || location.pathname === "/cadastro") {
        return <></>;
    }

    return (
        <StyledHeader>
            <h1>TrackIt</h1>
            <img src={user.image} alt="Foto de perfil do usuário" />
        </StyledHeader>
    );
}

export default Header;
