import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../images/Group 8.png"

export default function RegistrationPage() {
    return (
        <TelaRegistro>
            <img src={Logo} alt="Logo Tracklt" />
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="foto" />
                <Link to="/habits">
                    <button type="submit">Cadastrar</button>
                </Link>
            </form>
            <Link to="/">
                <button>Já tem uma conta? Faça login</button>
            </Link>
        </TelaRegistro>
    )
}

const TelaRegistro = styled.div`
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