import styled from "styled-components";
import Logo from "../images/Group 8.png"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner'

export default function RegistrationPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [usuario, setUsuario] = useState("");
    const [url, setUrl] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const navigate = useNavigate();

    function fazerCadastro(e) {
        e.preventDefault();

        setHabilitado(true);

        const novoUsuario = {
            email: email,
            name: usuario,
            image: url,
            password: senha
        }

        axios.post(`${BASE_URL.login}/sign-up`, novoUsuario)
            .then(() => navigate("/"))
            .catch(err => alert(err.response.data))
    }

    return (
        <TelaRegistro desabilita={habilitado ? "none" : ""}>
            <img src={Logo} alt="Logo Tracklt" />
            <form onSubmit={fazerCadastro}>
                <input data-identifier="input-email" disabled={habilitado} type="email" value={email} placeholder="email" required onChange={e => setEmail(e.target.value)} />
                <input data-identifier="input-password" disabled={habilitado} type="password" value={senha} placeholder="senha" required onChange={e => setSenha(e.target.value)} />
                <input data-identifier="input-name" disabled={habilitado} type="text" value={usuario} placeholder="nome" required onChange={e => setUsuario(e.target.value)} />
                <input data-identifier="input-photo" disabled={habilitado} type="url" value={url} placeholder="foto" required onChange={e => setUrl(e.target.value)} />
                <button type="submit">
                    <p>Cadastrar</p>
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={habilitado}
                    />
                </button>
            </form>
            <Link to="/">
                <button data-identifier="back-to-login-action">Já tem uma conta? Faça login</button>
            </Link>
        </TelaRegistro>
    )
}

const TelaRegistro = styled.div`
padding-top: 50px;
width: 375px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

p{
    display: ${props => props.desabilita}
}

form{
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input{
        width: 303px;
        height: 45px;
        margin-top: 5px;
        font-size: 19px;
        border-radius: 8px;
        border: 1px solid #dbdbdb;
    }

    input::placeholder{
        color: #dbdbdb;
    }

    button{
        height: 40px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
        font-size: 21px;
        margin-top: 5px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center
    }
}

button{
    background-color: #FFFFFF;
    border: none;
    margin-top: 20px;
    text-decoration: underline;
    color: #52B6FF;
}

button:hover{
    cursor: pointer;
}

`