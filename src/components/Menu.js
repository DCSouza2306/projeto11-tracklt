import styled from "styled-components"
import { Link, redirect } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import { AuthContext } from "../providers/auth"
import React from "react"

export default function Menu() {


    const { percentual } = React.useContext(AuthContext);

    return (
        <SecaoMenu>

            <Link
                to="/habits"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
                <p data-identifier="habit-page-action">Hábitos</p>
            </Link>

            <Link
                to="/today"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
            >

                <CircularProgressbar
                    value={percentual}
                    maxValue={1}
                    strokeWidth={5}
                    className="barra"
                    styles={buildStyles({
                        pathColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                    })}/>

                <p className="today">Hoje</p>
            </Link>

            <Link
                to="/historic"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
                <p data-identifier="historic-page-action" >Histórico</p>
            </Link>
        </SecaoMenu>

    )
}

const SecaoMenu = styled.div`
width: 375px;
height: 70px;
font-size: 18px;
background-color: #FFFFFF;
display: flex;
position: relative;
color: #52B6FF;
justify-content: space-between;
align-items: center;

.barra{
    width: 83px;
    position: absolute;
    top: -26px;
    right: 149px;
    z-index: 1;
}

Link{
    text-decoration: none;
}

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