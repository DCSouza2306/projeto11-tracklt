import Topo from "../components/Topo";
import styled from "styled-components";
import Menu from "../components/Menu";

export default function HistoricPage() {
    return (
        <>
            <Topo />
            <SecaoHoje>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </SecaoHoje>
            <Menu />

        </>
    )
}

const SecaoHoje = styled.div`
height: calc(100vh - 140px);
padding-top: 20px;
width: 375px;
background-color: #f2f2f2;
font-family: 'Lexend Deca', sans-serif;

h2{
    font-size: 23px;
    color: #126BA5;
    margin-left: 20px;
}

p{
    margin: 20px 20px;
    font-size: 18px;
    color: #666666;
}

`