import styled from "styled-components"
import Logo from "../images/Group 8.png"
import { Link, useNavigate } from "react-router-dom";
import React, { useState, } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'
import { AuthContext } from "../providers/auth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const {setDadosUsuario} = React.useContext(AuthContext);
    const navigate = useNavigate();


    function fazerLogin(e) {
        e.preventDefault();

        setHabilitado(true);

        const novoLogin = {
            email: email,
            password: senha
        }

       

        const promise = axios.post(`${BASE_URL.login}/login`, novoLogin)
            promise.then(res => {
                navigate("/habits");
                setDadosUsuario(res.data);
            })
            promise.catch(err => alert(err.response.data))
            
            
    }

    return (
        <TelaLogin desabilita={habilitado ? "none" : ""}>
            <img src={Logo} alt="Logo Tracklt" />
            <form onSubmit={fazerLogin}>
                <input type="email" disabled={habilitado} value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required />
                <input type="password" disabled={habilitado} value={senha} onChange={e => setSenha(e.target.value)} placeholder="senha" required />
                <button type="submit" disabled={habilitado}>
                    <p>Entrar</p>
                    <ThreeDots
                        height="40"
                        width="40"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={habilitado}
                    />
                </button>
            </form>

            <Link to="/registration">
                <button>Não tem uma conta? Cadastre-se</button>
            </Link>

        </TelaLogin>
    )
}

const TelaLogin = styled.div`
width: 375px;
height: 100vh;
padding-top: 50px;
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