import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledNavBar, StyledProgressbar } from "./style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ConcludedContext } from "../../common/contexts/ConcludedContext";

function NavBar() {
    const location = useLocation();
    const concluded = useContext(ConcludedContext);

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
                        value={concluded.percentageConcluded}
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
            <Link to={"/historico"}>
                <button>Histórico</button>
            </Link>
        </StyledNavBar>
    );
}

export default NavBar;
