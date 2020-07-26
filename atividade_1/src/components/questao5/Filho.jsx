import React, {Component} from 'react'

export default class Pai extends Component{
    render(){
        return(
            <div>
                <table className="table table-striped bordered hover" >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Cidade Natal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.nome}</td>
                            <td>{this.props.curso}</td>
                            <td>{this.props.cidade}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}