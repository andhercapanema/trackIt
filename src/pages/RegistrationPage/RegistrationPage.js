import React, { useContext, useEffect, useState } from "react";
import { StyledRegistrationPage, RegistrationForm } from "./style";
import logo from "../../assets/images/logo.svg";
import TrackItResource from "../../common/services/TrackItResource";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { UserContext } from "../../common/contexts/UserContext";

function RegistrationPage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const errorMessage = {
        409: "Usuário já cadastrado!",
        422: "Dados inválidos!",
    };

    async function registerUser(e) {
        e.preventDefault();

        try {
            setIsLoading(true);
            await TrackItResource.createUser(form);
            navigate("/");
        } catch (err) {
            alert(errorMessage[err.response.status]);
            console.error(err.response);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (user !== null) {
            navigate("/hoje");
        }
    }, [user, navigate]);

    return (
        <StyledRegistrationPage>
            <img src={logo} alt="Logo do TrackIt" />
            <RegistrationForm onSubmit={registerUser} isLoading={isLoading}>
                <input
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    placeholder="email"
                    disabled={isLoading}
                    required
                ></input>
                <input
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    placeholder="senha"
                    type="password"
                    disabled={isLoading}
                    required
                ></input>
                <input
                    name="name"
                    onChange={handleForm}
                    value={form.name}
                    placeholder="nome"
                    disabled={isLoading}
                    required
                ></input>
                <input
                    name="image"
                    onChange={handleForm}
                    value={form.image}
                    placeholder="foto"
                    disabled={isLoading}
                    required
                ></input>
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
                        "Cadastrar"
                    )}
                </button>
            </RegistrationForm>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </StyledRegistrationPage>
    );
}

export default RegistrationPage;
