import React from  'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

function Hero (props) {
    return(
        <div>
            <img src={props.img} alt="Heroi" />
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>Herói do/a {props.arena}</CardSubtitle>
                    <CardText>Olá, meu nome é {props.name}, eu sou o herói e vou lutar na arena {props.arena}.</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function Enemy (props){
    return(
        <div>
            <img src={props.img} alt="Vilao" />
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>Vilão do/a {props.arena}</CardSubtitle>
                    <CardText>Olá, meu nome é {props.name}, eu sou o inimigo e vou lutar na arena {props.arena}.</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function Arena(props){
    return(
        <div>
            {React.Children.map(props.children, arena =>{
                return React.cloneElement(arena, {...props})
            })}
        </div>
    )
}

export {Arena, Hero,Enemy}