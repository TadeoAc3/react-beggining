import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Tarjeta extends Component {
	render() {
		/*return (
		<div className="card" style={{"width" : "25rem"}}>
			<img className="card-img-top" src="https://barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Pls Help...</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
		);*/
		return (
			<div>
		      <Card>
		        <CardImg top style={{"width" : "40rem"}} src="https://barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500" alt="Card image cap" alt="Card image cap" />
		        <CardBody>
		          <CardTitle>Card title</CardTitle>
		          <CardSubtitle>Card subtitle</CardSubtitle>
		          <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
		          <Button>Button</Button>
		        </CardBody>
		      </Card>
		    </div>
	    )
	}
}

export default Tarjeta;
