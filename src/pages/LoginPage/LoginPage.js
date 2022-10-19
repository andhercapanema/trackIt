import React, { useEffect, useState } from "react";
import { StyledLoginPage, LoginForm, LoginInput } from "./style";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import TrackItResource from "../../common/services/TrackItResource";
import { ThreeDots } from "react-loader-spinner";

function LoginPage({ setUser }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const errorMessage = {
        401: "Usuário e/ou senha inválidos!",
        422: "Insira um email válido!",
    };

    async function login(e) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await TrackItResource.login(form);
            console.log(res.data);
            setUser(res.data);
            navigate("/hoje");
            localStorage.setItem("user", JSON.stringify(res.data));
        } catch (err) {
            alert(errorMessage[err.response.status]);
            console.error(err.response);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser !== null) {
            setUser(storedUser);
            navigate("/hoje");
        }
    }, [setUser, navigate]);

    return (
        <StyledLoginPage>
            <img src={logo} alt="Logo do TrackIt" />
            <LoginForm onSubmit={login}>
                <LoginInput
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    placeholder="email"
                    disabled={isLoading}
                    required
                ></LoginInput>
                <LoginInput
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    placeholder="senha"
                    disabled={isLoading}
                    type="password"
                    required
                ></LoginInput>
                <button>
                    {isLoading ? (
                        <ThreeDots
                            height="13"
                            width="51"
                            radius="7"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                        />
                    ) : (
                        "Entrar"
                    )}
                </button>
            </LoginForm>
            <Link to={"./cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </StyledLoginPage>
    );
}

export default LoginPage;
