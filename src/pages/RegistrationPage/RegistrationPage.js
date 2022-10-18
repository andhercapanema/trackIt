import React from "react";
import { StyledRegistrationPage, RegistrationForm } from "./style";
import logo from "../../assets/images/logo.svg";

function RegistrationPage() {
    return (
        <StyledRegistrationPage>
            <img src={logo} alt="Logo do TrackIt" />
            <RegistrationForm>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
                <button>Cadastrar</button>
            </RegistrationForm>
            <p>Já tem uma conta? Faça login!</p>
        </StyledRegistrationPage>
    );
}

export default RegistrationPage;
