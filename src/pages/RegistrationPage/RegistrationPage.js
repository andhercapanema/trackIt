import React, { useState } from "react";
import {
    StyledRegistrationPage,
    RegistrationForm,
    RegistrationInput,
} from "./style";
import logo from "../../assets/images/logo.svg";
import TrackItResource from "../../common/TrackItResource";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function RegistrationPage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
        // error: "error",
    });
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    console.log(form);

    async function registerUser(e) {
        e.preventDefault();

        try {
            setIsLoading(true);
            await TrackItResource.createUser(form);
            navigate("/hoje");
        } catch (err) {
            console.error(err.response.data);
        }
    }

    return (
        <StyledRegistrationPage>
            <img src={logo} alt="Logo do TrackIt" />
            <RegistrationForm onSubmit={registerUser}>
                <RegistrationInput
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    placeholder="email"
                    disabled={isLoading}
                ></RegistrationInput>
                <RegistrationInput
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    placeholder="senha"
                    type="password"
                    disabled={isLoading}
                ></RegistrationInput>
                <RegistrationInput
                    name="name"
                    onChange={handleForm}
                    value={form.name}
                    placeholder="nome"
                    disabled={isLoading}
                ></RegistrationInput>
                <RegistrationInput
                    name="image"
                    onChange={handleForm}
                    value={form.image}
                    placeholder="foto"
                    disabled={isLoading}
                ></RegistrationInput>
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
            <p>Já tem uma conta? Faça login!</p>
        </StyledRegistrationPage>
    );
}

export default RegistrationPage;
