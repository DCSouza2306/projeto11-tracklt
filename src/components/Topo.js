import styled from "styled-components";
import user from "../images/User.png"
import React from "react";
import { AuthContext } from "../providers/auth";

export default function Topo(){

    const {dadosUsuario} = React.useContext(AuthContext);

    return(
        <SecaoTopo>
           <p>Tracklt</p>
            <img src={dadosUsuario.image} alt="imagem usuario"/>
        </SecaoTopo>
    )
}

const SecaoTopo = styled.div`
width:375px;
height: 70px;
background-color: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;

p{
    color: #FFFFFF;
    font-size: 38px;
    font-family: 'Playball', cursive;
    margin: 0 15px;
}

img{
    width: 51px;
    height: 51px;
    border-radius: 100%;
    margin: 0 15px;
}
`