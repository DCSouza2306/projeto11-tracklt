import styled from "styled-components";
import { useState } from "react";

export default function Dias({
    nome,
    dia,
    setDiasSelecionados,
    diasSelecionados,
}) {

    const [desabilitado, setDesabilitado] = useState(false)

    function SelecionarDia() {
        diasSelecionados.push(dia);
        diasSelecionados.sort();
        setDiasSelecionados([...diasSelecionados])
        setDesabilitado(true);
    }

    return (
        <BotaoDia disabled={desabilitado} onClick={() => SelecionarDia()}>{nome} </BotaoDia>
    )
}

const BotaoDia = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
    margin-top: 10px;
    width:30px;
    height: 30px;
    color: #D4D4D4;
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px;

    :disabled{
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`