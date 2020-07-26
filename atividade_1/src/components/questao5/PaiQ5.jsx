import React, {Component} from 'react'
import Filho from './Filho'

export default class Pai extends Component{
    render(){
        let nome = 'João'
        let curso = 'ES'
        let cidade = 'Fortaleza'
        return(
            <div>
                <Filho nome = {nome} curso = {curso} cidade = {cidade}/>
            </div>
        )
    }
}