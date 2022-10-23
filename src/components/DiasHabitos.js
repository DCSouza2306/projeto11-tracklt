import styled from "styled-components"
import { useState, useEffect } from "react"

export default function DiasHabitos({
    dia,
    nome,
    diaHabito
}){

    const [selecionado, setSelecionado] = useState(false)

    useEffect(() => {
        if(diaHabito.includes(dia)){
           setSelecionado(true)
        }
    },[],[dia])
  
    return(
        <BotaoDiaHabito 
        cor={selecionado ? "#FFFFFF" : "#D4D4D4"}
        background={selecionado ? "#CFCFCF" : "#FFFFFF"}>
            <p>{nome}</p>
        </BotaoDiaHabito>
    )
}

const BotaoDiaHabito = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
    margin-top: 10px;
    width:30px;
    height: 30px;
    color: ${props => props.cor};
    background-color: ${props => props.background};
    border: 1px solid #D4D4D4;
    border-radius: 5px;

`