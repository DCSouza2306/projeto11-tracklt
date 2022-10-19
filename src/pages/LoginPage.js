import styled from "styled-components"
import Logo from "../images/Group 8.png"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <TelaLogin>
            <img src={Logo} alt="Logo Tracklt" />
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <Link to="/habits">
                    <button type="submit">Entrar</button>
                </Link>
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