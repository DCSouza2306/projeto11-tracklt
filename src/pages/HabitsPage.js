import Topo from "../components/Topo";
import styled from "styled-components";
import Menu from "../components/Menu";

export default function HabitsPage() {
    return (
        <>
            <Topo />
            
            <SecaoHabitos>
                <TituloHabitos>
                    <h2>Meus Habitos</h2>
                    <button>+</button>
                </TituloHabitos>
                <ListaHabitos>
                <p>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</p>
                </ListaHabitos>
            </SecaoHabitos>
            <Menu />
          
        </>
    )
}



const SecaoHabitos = styled.div`
height: calc(100vh - 140px);
width: 375px;
background-color: #f2f2f2;
font-family: 'Lexend Deca', sans-serif;

`

const TituloHabitos = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 0;

h2{
    font-size: 23px;
    color: #126BA5;
    margin-left: 20px;
}

button{
    width:40px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 23px;
    border: none;
    border-radius: 8px;
    margin-right: 20px;
}
`
const ListaHabitos = styled.div`
margin: 0 20px;
font-size: 18px;
color: #666666;

`