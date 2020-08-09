import React from  'react'
import Lulu from '../../image/lulu.jpg'
import Vinci from '../../image/Vinci.jpg'
function Hero (props) {
    return(
        <div>
            <h4>Olá, meu nome é {props.name} e eu sou o herói.</h4>
            <img src={Lulu} alt='heroi'/>

        </div>
    )
}

function Enemy (props){
    return(
        <div>
            <h4>Olá, meu nome é {props.name} e eu sou o inimigo.</h4>
            <img src = {Vinci} alt='Vilon'/>

        </div>
    )
}

function Arena(){
    return(
        <div>
            <Hero name = 'Lulu' img='Lulu' />
            <Enemy name = 'Vinci' img='Vinci'/>
        </div>
    )
}

export default Arena