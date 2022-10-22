import styled from "styled-components"
import React, { useState } from "react"
import Dias from "./Dias";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { AuthContext } from "../providers/auth";

export default function CriarHabito({
    habilitaCriarHabitos,
    setHabilitaCriarHabitos
}) {


    const [habito, setHabito] = useState("");
    const [diasSelecionados, setDiasSelecionados] = useState([])
    const { dadosUsuario } = React.useContext(AuthContext);

    const dias = [
        { dia: 1, nome: "S" },
        { dia: 2, nome: "T" },
        { dia: 3, nome: "Q" },
        { dia: 3, nome: "Q" },
        { dia: 5, nome: "S" },
        { dia: 6, nome: "S" },
        { dia: 7, nome: "D" },
    ]

    function enviarHabito(e) {

        e.preventDefault();

        if (diasSelecionados.length === 0) {
            alert("Selecione pelo menos um dia");
        } else {
            const novoHabito = {
                name: habito,
                days: diasSelecionados,

            }

            axios.post(`${BASE_URL.habitos}`,
                novoHabito,
                {
                    headers:
                        { 'Authorization': `Bearer ${dadosUsuario.token}` }
                })
                .then((res) => {
                    console.log("deu certo");
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err.response.data)
                })

                alert ("deu certo")
        }


    }

    function cancelarHabito() {
        setHabilitaCriarHabitos(false);
    }

    return (
        <CaixaHabito habilita={habilitaCriarHabitos}>
            <form onSubmit={enviarHabito}>
                <input
                    required
                    value={habito}
                    placeholder="nome do habito"
                    onChange={e => setHabito(e.target.value)}
                ></input>
                {dias.map((d, i) => <Dias
                    key={i}
                    nome={d.nome}
                    dia={d.dia}
                    setDiasSelecionados={setDiasSelecionados}
                    diasSelecionados={diasSelecionados}
                />)}
                <div className="botoes">
                    <button
                        className="botoes-cancelar"
                        onClick={() => cancelarHabito()}
                    >Cancelar</button>
                    <button
                        type="submit"
                        className="botoes-salvar"
                    >Salvar</button>
                </div>
            </form>
        </CaixaHabito>
    )
}

const CaixaHabito = styled.div`
width: 340px;
height: 180px;
background-color: #FFFFFF;
border-radius: 5px;
margin-top: 10px;
padding:18px;
display: ${props => props.habilita ? "" : "none"};

.botoes{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px
}

.botoes-cancelar{
    background-color: #FFFFFF;
    border: none;
    color: #52B6FF;
    width: 84px;
    height: 35px;
    font-size: 16px;
}

.botoes-salvar{
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    width: 84px;
    height: 35px;
    font-size: 16px;
}

button:hover{
    cursor: pointer;
}

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
`