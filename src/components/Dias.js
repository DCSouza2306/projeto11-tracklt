import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Dias({
    nome,
    dia,
    setDiasSelecionados,
    diasSelecionados,
    habito
}) {

    const [desabilitado, setDesabilitado] = useState(false);

    useEffect(() => {
        setDesabilitado(false);
    }, [habito])



    function SelecionarDia() {
        if (diasSelecionados.includes(dia)) {
            const novosDias = diasSelecionados.filter((n) => n != dia)
            setDiasSelecionados(novosDias);
            setDesabilitado(!desabilitado);
        } else {
            diasSelecionados.push(dia);
            setDiasSelecionados([...diasSelecionados]);
            setDesabilitado(!desabilitado);
        }

    }



    return (
        <BotaoDia
            cor={desabilitado ? "#FFFFFF" : "#D4D4D4"}
            background={desabilitado ? "#CFCFCF" : "#FFFFFF"}
            onClick={habito === "" ? () => { } : () => SelecionarDia()}
        >{nome} </BotaoDia>
    )
}

const BotaoDia = styled.div`
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