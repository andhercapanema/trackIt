import React from "react";
import { StyledLoginPage, LoginForm, LoginInput } from "./style";
import logo from "../../assets/images/logo.svg";

function LoginPage() {
    return (
        <StyledLoginPage>
            <img src={logo} alt="Logo do TrackIt" />
            <LoginForm>
                <LoginInput placeholder="email"></LoginInput>
                <LoginInput placeholder="senha"></LoginInput>
                <button>Entrar</button>
            </LoginForm>
            <p>Não tem uma conta? Cadastre-se!</p>
        </StyledLoginPage>
    );
}

export default LoginPage;
