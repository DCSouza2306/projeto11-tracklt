import Topo from "../components/Topo";
import styled from "styled-components";
import Menu from "../components/Menu";
import Habitos from "../components/Habitos";
import React from "react";
import CriarHabito from "../components/CriarHabito";
import { useState } from "react";

export default function HabitsPage() {

    const [habilitaCriarHabitos, setHabilitaCriarHabitos] = useState(false)

    function habilitarNovosHabitos() {
        setHabilitaCriarHabitos(true);
    }

    return (
        <>
            <Topo />

            <SecaoHabitos>
                <TituloHabitos>
                    <h2>Meus Habitos</h2>
                    <button onClick={() => habilitarNovosHabitos()}>+</button>
                </TituloHabitos>

                <ListaHabitos>
                    <CriarHabito
                        habilitaCriarHabitos={habilitaCriarHabitos}
                        setHabilitaCriarHabitos={setHabilitaCriarHabitos}
                    ></CriarHabito>
                    <Habitos />
                    <p>Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!</p>
                </ListaHabitos>
            </SecaoHabitos>
            <Menu />

        </>
    )
}



const SecaoHabitos = styled.div`
height: calc(100vh - 140px);
width: 375px;
background-color: #f2f2f2;
font-family: 'Lexend Deca', sans-serif;
padding-top: 20px;

`

const TituloHabitos = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


h2{
    font-size: 23px;
    color: #126BA5;
    margin-left: 20px;
}

button{
    width:40px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 23px;
    border: none;
    border-radius: 8px;
    margin-right: 20px;
}

button:hover{
    cursor:pointer;
}
`
const ListaHabitos = styled.div`
margin: 0 20px;
font-size: 18px;
color: #666666;

`