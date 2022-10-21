import styled from "styled-components"
import Logo from "../images/Group 8.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    return (
        <TelaLogin>
            <img src={Logo} alt="Logo Tracklt" />
            <form>
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <button type="submit">Entrar</button>
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
background-color: lightgray;
display: flex;
flex-direction: column;
align-items: center;


form{
    display: flex;
    flex-direction: column;
}

`