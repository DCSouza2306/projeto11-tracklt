import Topo from "../components/Topo";
import styled from "styled-components";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday"
import UpdateLocale from "dayjs/plugin/updateLocale"
import { AuthContext } from "../providers/auth";
import { BASE_URL } from "../constants/urls";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HabitosHoje from "../components/HabitosHoje";

export default function TodayPage() {

    const { dadosUsuario, setPercentual, percentual } = React.useContext(AuthContext);
    const [numeroMarcados, setNumeroMarcados] = useState(0)
    const [habitosHoje, setHabitosHoje] = useState([]);
    const [atualiza, setAtualiza] = useState(false)
    const config = {
        headers:
            { 'Authorization': `Bearer ${dadosUsuario.token}` }
    }

    useEffect(() => {
        axios.get(`${BASE_URL.habitos}/today`, config)
            .then(res => {
                setHabitosHoje(res.data)
                const habitos = res.data
                let novosMarcados = res.data
                novosMarcados = novosMarcados.filter((r) => r.done === true)
                setNumeroMarcados(novosMarcados.length)
                const novoPercentual = novosMarcados.length / habitos.length
                setPercentual(novoPercentual);
            })
            .catch(err => {
                console.log("deu erro")
            })

    }, [atualiza])




    dayjs.extend(weekday);
    dayjs.extend(UpdateLocale)

    dayjs.updateLocale('en', {
        weekdays: [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado"
        ]
    })

    const diaMes = dayjs().format("DD/MM")
    const diaSemana = dayjs()


    return (
        <>
            <Topo />
            <SecaoHoje
                desabilita={habitosHoje.length > 0 ? "none" : ""}
                habilita={habitosHoje.length > 0 ? "" : "none"}
            >
                <h2 data-identifier="today-infos">{diaSemana.weekday(dayjs().day()).format('dddd')}, {diaMes}</h2>
                <p className="texto-nao-concluido">Nenhum hábito concluido ainda</p>
                <p
                    data-identifier="today-infos"
                    className="texto-concluido"
                >{percentual * 100}% dos hábitos concluídos</p>
                {habitosHoje.map((h) =>
                    <HabitosHoje
                        key={h.id}
                        idHabito={h.id}
                        marcado={h.done}
                        habito={h.name}
                        sequencia={h.currentSequence}
                        recorde={h.highestSequence}
                        qtdHabitos={habitosHoje.length}
                        setAtualiza={setAtualiza}
                        atualiza={atualiza}
                    />
                )}
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
padding-top: 20px;

h2{
    font-size: 23px;
    color: #126BA5;
    margin-left: 20px;
}

.texto-nao-concluido{
    margin: 10px 20px;
    color: #BABABA;
    display: ${props => props.desabilita}
}

.texto-concluido{
    color: #8FC549;
    margin: 10px 20px;
    display: ${props => props.habilita}

}

`