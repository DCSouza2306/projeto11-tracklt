import Topo from "../components/Topo";
import styled from "styled-components";

export default function HabitsPage() {
    return (
        <>
            <Topo />
            <TelaHabitos>

                Tela de Habitos
            </TelaHabitos>
        </>
    )
}

const TelaHabitos = styled.div`
width: 375px;
height: calc(100vh - 140px);
background-color: #f2f2f2;
`
