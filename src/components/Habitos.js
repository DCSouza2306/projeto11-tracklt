import styled from "styled-components"
import DiasHabitos from "./DiasHabitos"
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { AuthContext } from "../providers/auth";
import React from "react";

export default function Habitos({
    name,
    days,
    id,
    setHabitos,
    setMudarTela,
    mudarTela

}) {

    const dias = [
        { dia: 1, nome: "S" },
        { dia: 2, nome: "T" },
        { dia: 3, nome: "Q" },
        { dia: 4, nome: "Q" },
        { dia: 5, nome: "S" },
        { dia: 6, nome: "S" },
        { dia: 7, nome: "D" }
    ]
    const { dadosUsuario } = React.useContext(AuthContext);
    const config = {
        headers:
            { 'Authorization': `Bearer ${dadosUsuario.token}` }
    }

    function deletarHabito() {
        const excluir = window.confirm("Deseja realmente excluir esse habitos?")
        if (excluir) {
            axios.delete(`${BASE_URL.habitos}/${id}`, config)
            axios.get(`${BASE_URL.habitos}`, config)
                .then((res) => {
                    setHabitos(res.data)
                    setMudarTela(!mudarTela)
                })
        }

    }

    return (
        <ContainerHabito>
            <ion-icon
                data-identifier="delete-habit-btn"
                onClick={() => deletarHabito()}
                name="trash-outline">
            </ion-icon>
            <h2 data-identifier="habit-name">{name}</h2>
            {dias.map((d, i) =>
                <DiasHabitos
                    key={i}
                    nome={d.nome}
                    dia={d.dia}
                    diaHabito={days}
                />)}
        </ContainerHabito>
    )
}

const ContainerHabito = styled.div`
width: 340px;
height: 91px;
background-color: #FFFFFF;
margin-top: 15px;
border-radius: 10px;
padding: 13px 15px;
position: relative;

h2{
    color:#666666;
    font-size: 20px;
}

ion-icon{
    position: absolute;
    top: 10px;
    right: 40px;

    :hover{
        cursor: pointer;
    }
}
`