import React from  'react'

function Hero (props) {
    return(
        <div>
            <h4>Olá, meu nome é {props.name}, eu sou o herói e vou lutar na arena {props.arena}.</h4>
            <img src={props.img} alt='Heroi'/>

        </div>
    )
}

function Enemy (props){
    return(
        <div>
            <h4>Olá, meu nome é {props.name}, eu sou o inimigo e vou lutar na arena {props.arena}.</h4>
            <img src = {props.img} alt='vilao'/>

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