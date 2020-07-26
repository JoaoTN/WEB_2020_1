import React, {Component} from 'react'

export default class Aluno extends Component{
    render(){
        return(
            <div>
                <h3>Nome: {this.props.nome}</h3>
                <h3>Curso: {this.props.curso}</h3>
                <h3>Cidade Natal: {this.props.cidade}</h3>
            </div>
        )
    }
}