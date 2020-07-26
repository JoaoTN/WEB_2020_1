import React from 'react'
import Filho from './Filho'
export default (props)=>{
    const nome = 'João'
    const curso = 'ES'
    const cidade = 'Fortaleza'
    return(
        <div>
            <Filho nome = {nome} curso = {curso} cidade = {cidade}/>
        </div>
    )
}