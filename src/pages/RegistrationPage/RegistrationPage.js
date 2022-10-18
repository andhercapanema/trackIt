import React, { useState } from "react";
import { StyledRegistrationPage, RegistrationForm } from "./style";
import logo from "../../assets/images/logo.svg";
import TrackItResource from "../../common/TrackItResource";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationPage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
    });
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    console.log(form);

    async function registerUser(e) {
        e.preventDefault();

        try {
            const response = await TrackItResource.createUser(form);
            console.log(response);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    return (
        <StyledRegistrationPage>
            <img src={logo} alt="Logo do TrackIt" />
            <RegistrationForm onSubmit={registerUser}>
                <input
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    placeholder="email"
                ></input>
                <input
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    placeholder="senha"
                    type="password"
                ></input>
                <input
                    name="name"
                    onChange={handleForm}
                    value={form.name}
                    placeholder="nome"
                ></input>
                <input
                    name="image"
                    onChange={handleForm}
                    value={form.image}
                    placeholder="foto"
                ></input>
                <button>Cadastrar</button>
            </RegistrationForm>
            <p>Já tem uma conta? Faça login!</p>
        </StyledRegistrationPage>
    );
}

export default RegistrationPage;
