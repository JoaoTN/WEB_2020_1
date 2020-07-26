import React, {Component} from 'react'

export default class Pai extends Component{
    render(){
        return(
            <div>
                <h1>Nome: {this.props.nome}</h1>
                <h1>Curso: {this.props.curso}</h1>
                <h1>Cidade Natal: {this.props.cidade}</h1>
            </div>
        )
    }
}