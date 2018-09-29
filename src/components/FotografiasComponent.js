import React, { Component } from 'react';
import FotografiaComponent from './FotografiaComponent';
import axios from 'axios';

export class FotografiasComponent extends Component {

	state = {
		pokemons: [{}],
	}


componentDidMount(){
	axios
	 	.get("https://pokeapi.co/api/v2/type/14/")
	 	.then(response => {
	 		console.log(response.data.pokemon[0].pokemon)
	 		this.setState({
	 			pokemons: response.data.pokemon
	 		})
	 	})
	 	.catch(error => console.log(error))
}

deleteComponent(){
	console.log("Eliminar Component");
}

	render() {
		return (
			<div>
				{ this.state.pokemons.map(poke => 
					<FotografiaComponent 
					key={poke.id}
					id={poke.id}
					name={poke.name}
					delete={this.deleteComponent}
					/>)
				}
			</div>
		);
	}
}

export default FotografiasComponent;
