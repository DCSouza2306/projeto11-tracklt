import Topo from "../components/Topo";
import styled from "styled-components";
import Menu from "../components/Menu";

export default function TodayPage() {
    return (
        <>
            <Topo />
            <SecaoHoje>
                Tela de Habitos de Hoje
            </SecaoHoje>
            <Menu />

        </>
    )
}

const SecaoHoje = styled.div`
height: calc(100vh - 140px);
width: 375px;
background-color: #f2f2f2;
font-family: 'Lexend Deca', sans-serif;

`