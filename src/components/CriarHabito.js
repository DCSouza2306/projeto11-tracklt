import styled from "styled-components"
import React, { useState } from "react"
import Dias from "./Dias";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { AuthContext } from "../providers/auth";
import { ThreeDots } from 'react-loader-spinner'

export default function CriarHabito({
    habilitaCriarHabitos,
    setHabilitaCriarHabitos,

}) {


    const [habito, setHabito] = useState("");
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [habilitado, setHabilitado] = useState(false);
    const { dadosUsuario } = React.useContext(AuthContext);
    const config = {
        headers:
            { 'Authorization': `Bearer ${dadosUsuario.token}` }
    }

    const dias = [
        { dia: 1, nome: "S" },
        { dia: 2, nome: "T" },
        { dia: 3, nome: "Q" },
        { dia: 4, nome: "Q" },
        { dia: 5, nome: "S" },
        { dia: 6, nome: "S" },
        { dia: 7, nome: "D" },
    ]

    function enviarHabito(e) {

        e.preventDefault();

        setHabilitado(true);
        diasSelecionados.sort();

        if (diasSelecionados.length === 0) {
            alert("Selecione pelo menos um dia");
            setHabilitado(false);
        } else {
            const novoHabito = {
                name: habito,
                days: diasSelecionados,

            }

            axios.post(`${BASE_URL.habitos}`, novoHabito, config)
                .then(() => {
                    setHabito("");
                    setDiasSelecionados([]);
                    setHabilitado(false);
                })
                .catch((err) => {
                    console.log(err.response.data)
                })


        }


    }

    function cancelarHabito() {
        setHabilitaCriarHabitos(false);
        setHabito("")
        setDiasSelecionados([])
    }
    return (
        <CaixaHabito
            habilita={habilitaCriarHabitos}
            desabilita={habilitado ? "none" : ""}
        >
            <form onSubmit={enviarHabito}>
                <input
                    required
                    disabled={habilitado}
                    value={habito}
                    placeholder="nome do habito"
                    onChange={e => setHabito(e.target.value)}
                ></input>
                {dias.map((d, i) => <Dias
                    key={i}
                    nome={d.nome}
                    dia={d.dia}
                    habito={habito}
                    setHabilitado={setHabilitado}
                    setDiasSelecionados={setDiasSelecionados}
                    diasSelecionados={diasSelecionados}
                />)}
                <div className="botoes">
                    <div
                        className="botoes-cancelar"
                        onClick={() => cancelarHabito()}
                    >Cancelar</div>
                    <button
                        type="submit"
                        className="botoes-salvar"
                    >
                        <p>Salvar</p>
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

p{
    display: ${props => props.desabilita}
}

.botoes{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px
}

.botoes-cancelar{
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
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

button,div:hover{
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