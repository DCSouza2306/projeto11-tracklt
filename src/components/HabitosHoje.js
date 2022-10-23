import styled from "styled-components"

export default function HabitosHoje() {
    return (
        <CaixaHabitoHoje>
            <div className="descricao-habitos">
                <h3 className="nome-habito">Ler 1 Capitulo de livro</h3>
                <p className="sequencia-recorde">Sequencia Atual: 3 dias</p>
                <p className="sequencia-recorde">Seu recorde: 5 dias</p>
            </div>
            <ion-icon name="checkbox"></ion-icon>

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
    color: #EBEBEB;

    :hover{
        cursor: pointer;
    }
}

.nome-habito{
    font-size: 20px;
    margin-bottom: 10px
}

.sequencia-recorde{
    font-size: 13px;
    line-height: 15px
}

`