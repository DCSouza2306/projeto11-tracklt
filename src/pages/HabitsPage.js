import Topo from "../components/Topo";
import styled from "styled-components";
import Menu from "../components/Menu";
import Habitos from "../components/Habitos";
import React from "react";
import CriarHabito from "../components/CriarHabito";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { AuthContext } from "../providers/auth";

export default function HabitsPage() {


    const { dadosUsuario } = React.useContext(AuthContext);
    const [habilitaCriarHabitos, setHabilitaCriarHabitos] = useState(false);
    const [mudarTela, setMudarTela] = useState(false)
    const [habitos, setHabitos] = useState([])
    const config = {
        headers:
            { 'Authorization': `Bearer ${dadosUsuario.token}` }
    }

    useEffect(() => {
        const promise = axios.get(`${BASE_URL.habitos}`, config)
        promise.then((res) => {
            setHabitos(res.data);
            

        })
    }, [mudarTela])


    function habilitarNovosHabitos() {
        setHabilitaCriarHabitos(true);
    }

    console.log(habitos)
    return (
        <>
            <Topo />

            <SecaoHabitos mostrarTexto={habitos.length === 0 ? "" : "none"}>
                <TituloHabitos>
                    <h2>Meus Habitos</h2>
                    <button onClick={() => habilitarNovosHabitos()}>+</button>
                </TituloHabitos>

                <ListaHabitos>
                    <CriarHabito
                        habilitaCriarHabitos={habilitaCriarHabitos}
                        setHabilitaCriarHabitos={setHabilitaCriarHabitos}
                        setMudarTela={setMudarTela}
                        mudarTela={mudarTela}
                    ></CriarHabito>
                    {habitos.map((h) =>
                        <Habitos
                            key={h.id}
                            id={h.id}
                            name={h.name}
                            days={h.days}
                            setHabitos={setHabitos}
                            setMudarTela={setMudarTela}
                            mudarTela={mudarTela}
                        />)}
                    <p className="escondido">Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!</p>
                </ListaHabitos>
            </SecaoHabitos>
            <Menu />

        </>
    )
}



const SecaoHabitos = styled.div`
width: 375px;
background-color: #f2f2f2;
font-family: 'Lexend Deca', sans-serif;
padding-top: 20px;

.escondido{
    display: ${props => props.mostrarTexto};
    margin-top: 20px;
}

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
height: calc(100vh - 200px);
margin: 0 20px;
font-size: 18px;
color: #666666;
overflow: hidden;
overflow-y: scroll;


`