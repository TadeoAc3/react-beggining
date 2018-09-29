import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class Contador extends Component {

	//Los STATE son los elementos que solo pertenecen al componente donde se declaran.
	//Las PROPS son los elementos que pueden heredarse, generalmente van en el padre.
	state = {
		titulo : "Sumador",
		contador : 0,
	}

	incrementarContador = () => {
		this.setState({
			contador: this.state.contador + 1
		})
	}

	validarContador = () => {
		return this.state.contador >= 3 && this.state.contador  <= 10? 'warning' : 'info' 
	}

	render() {
		return (
			//Si la función se usa como atributo de estilo se declara con ()
			//Si la función se usa en un evento de
			<div className="m-5">
				<h1>{this.state.titulo}</h1>
		        <Badge className="mr-3" color={this.validarContador()}>{this.state.contador}</Badge>
		        <Button onClick={this.incrementarContador}>{this.state.titulo}</Button>
			</div>
		);
	}
}

export default Contador;
