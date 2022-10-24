import styled from "styled-components"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { AuthContext, AuthContextHabitos } from "../providers/auth"
import { BASE_URL } from "../constants/urls"


export default function HabitosHoje({
    habito,
    sequencia,
    recorde,
    marcado,
    idHabito,
    setAtualiza,
    atualiza,
}) {

    const [marcarHabito, setMarcarHabito] = useState(false);
    const { dadosUsuario } = React.useContext(AuthContext);
    const config = {
        headers:
            { 'Authorization': `Bearer ${dadosUsuario.token}` }
    }

    useEffect(() => {
        if (marcarHabito) {
            if (!marcado) {
                axios.post(`${BASE_URL.habitos}/${idHabito}/check`, config, config)
                    .then(() => {
                        setMarcarHabito(false)
                        setAtualiza(!atualiza)
                    })
                    .catch((err) => console.log(err.response))
            } else {
                axios.post(`${BASE_URL.habitos}/${idHabito}/uncheck`, habito, config)
                    .then(() => {
                        setMarcarHabito(false)
                        setAtualiza(!atualiza)
                    })
                    .catch(() => console.log("deu errado"))
            }
        }

    }, [marcarHabito])

    return (
        <CaixaHabitoHoje
            mudaCor={marcado ? "#8FC549" : "#EBEBEB"}
            corSequencia={marcado ? "#8FC549" : "#666666"}
            corVerde={recorde > 0 && sequencia === recorde ? "#8FC549" : "#666666"}>
            <div data-identifier="today-infos" className="descricao-habitos">
                <h3 className="nome-habito">{habito}</h3>
                <p className="sequencia-recorde">Sequencia Atual: <span className="sequencia">{sequencia} dias</span></p>
                <p className="sequencia-recorde">Seu recorde: <span className="recorde">{recorde} dias</span></p>
            </div>
            <ion-icon onClick={() => setMarcarHabito(!marcarHabito)} name="checkbox"></ion-icon>

        </CaixaHabitoHoje>
    )
}

const CaixaHabitoHoje = styled.div`
width:340px;
height: 94px;
background-color: #FFFFFF;
color: #666666;
margin: 10px auto;
padding: 12px;
display: flex;
justify-content: space-between;
align-items: center;

ion-icon{
    font-size: 79px;
    color: ${props => props.mudaCor};

    :hover{
        cursor: pointer;
    }
}

.nome-habito{
    font-size: 20px;
    margin-bottom: 10px;
}

.sequencia-recorde{
    font-size: 13px;
    line-height: 15px;
 
}

.sequencia{
    color: ${props => props.corSequencia}
}

.recorde{
    color: ${props => props.corVerde}
}

`