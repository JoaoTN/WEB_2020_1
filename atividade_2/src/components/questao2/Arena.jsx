import React from  'react'
import {IMG_HERO, IMG_ENEMY} from './constants'

function Hero (props) {
    return(
        <div>
            <h4>Olá, meu nome é {props.name} e eu sou o herói.</h4>
            <img src={props.img} alt='Heroi'/>

        </div>
    )
}

function Enemy (props){
    return(
        <div>
            <h4>Olá, meu nome é {props.name} e eu sou o inimigo.</h4>
            <img src = {props.img} alt='vilao'/>

        </div>
    )
}

function Arena(){
    return(
        <div>
            <Hero name = 'Lulu' img = {IMG_HERO}/>
            <Enemy name = 'Vinci' img = {IMG_ENEMY}/>
        </div>
    )
}

export default Arena