import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ConcludedContext } from "../../common/contexts/ConcludedContext";
import { UserContext } from "../../common/contexts/UserContext";
import { StyledHeader } from "./style";

function Header() {
    const location = useLocation();
    const { user, setUser } = useContext(UserContext);
    const { setPercentageConcluded } = useContext(ConcludedContext);
    const navigate = useNavigate();

    function logout() {
        navigate("/");
        setUser(null);
        setPercentageConcluded(0);
        localStorage.clear();
    }

    useEffect(() => {
        if (user === null && location.pathname !== "/cadastro") {
            navigate("/");
        }
    }, [user, navigate, location.pathname]);

    if (location.pathname === "/" || location.pathname === "/cadastro") {
        return <></>;
    }

    return (
        <StyledHeader>
            <h1>TrackIt</h1>
            <img
                src={user?.image}
                alt="Foto de perfil do usuário"
                onClick={logout}
                data-identifier="avatar"
            />
        </StyledHeader>
    );
}

export default Header;
