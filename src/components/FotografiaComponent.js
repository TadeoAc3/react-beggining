import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';


export class FotografiaComponent extends Component {

	constructor(props){
		super(props);
	}

	state = {
	}

/*componentDidMount(){
	axios
	 	.get("https://ghibliapi.herokuapp.com/films")
	 	.then(response => {
	 		console.log(response.data)
	 		this.setState({
	 			films: response.data
	 		})
	 	})
	 	.catch(error => console.log(error))
}*/



	render() {
		return (
			<div>
		      <Card className="card-films">
		        <CardBody>
		          <CardTitle>{this.props.name}</CardTitle>
		          
		          <Button onClick={this.props.delete} >Eliminar</Button>
		        </CardBody>
		      </Card>
		    </div>
		);
	}
}

export default FotografiaComponent;
