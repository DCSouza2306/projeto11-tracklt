import Topo from "../components/Topo";
import styled from "styled-components";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday"
import UpdateLocale from "dayjs/plugin/updateLocale"
import { AuthContext } from "../providers/auth";
import { BASE_URL } from "../constants/urls";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import HabitosHoje from "../components/HabitosHoje";

export default function TodayPage() {

    const { dadosUsuario } = React.useContext(AuthContext);
    const [habitosHoje, setHabitosHoje] = useState([]);
    const config = {
        headers:
            { 'Authorization': `Bearer ${dadosUsuario.token}` }
    }

    useEffect(()=>{
        axios.get(`${BASE_URL.habitos}/today`,config)
            .then(res => {
                setHabitosHoje(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    },[])

    dayjs.extend(weekday);
    dayjs.extend(UpdateLocale)

    dayjs.updateLocale('en', {
        weekdays:[
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
            <SecaoHoje>
                <h2>{diaSemana.weekday(dayjs().day()).format('dddd')}, {diaMes}</h2>
                <p className="texto-nao-concluido">Nenhum hábito concluido ainda</p>
                <HabitosHoje />
            
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
}

`