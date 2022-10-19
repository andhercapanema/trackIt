import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledNavBar, StyledProgressbar } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NavBar() {
    const location = useLocation();

    if (location.pathname === "/" || location.pathname === "/cadastro") {
        return <></>;
    }

    return (
        <StyledNavBar>
            <Link to={"/habitos"}>
                <button>Hábitos</button>
            </Link>
            <Link to={"/hoje"}>
                <StyledProgressbar>
                    <CircularProgressbar
                        value={50}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52b6ff",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                            textSize: "18px",
                        })}
                    />
                </StyledProgressbar>
            </Link>
            <Link to={"/history"}>
                <button>Histórico</button>
            </Link>
        </StyledNavBar>
    );
}

export default NavBar;
