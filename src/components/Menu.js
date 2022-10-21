import styled from "styled-components"

export default function Menu(){
    return(
        <SecaoMenu>
            <p>Hábitos</p>
            <p className="today">Hoje</p>
            <p>Histórico</p>
        </SecaoMenu>

    )
}

const SecaoMenu = styled.div `
width: 375px;
height: 70px;
font-size: 18px;
background-color: #FFFFFF;
display: flex;
position: relative;
color: #52B6FF;
justify-content: space-between;
align-items: center;

p{
    margin: 0 20px;
}

.today{
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    position: absolute;
    top: -30px;
    right: 125px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`