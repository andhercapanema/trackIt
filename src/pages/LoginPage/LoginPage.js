import React from "react";
import { StyledLoginPage, LoginForm } from "./style";
import logo from "../../assets/images/logo.svg";

function LoginPage() {
    return (
        <StyledLoginPage>
            <img src={logo} alt="Logo do TrackIt" />
            <LoginForm>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button>Entrar</button>
            </LoginForm>
            <p>Não tem uma conta? Cadastre-se!</p>
        </StyledLoginPage>
    );
}

export default LoginPage;
