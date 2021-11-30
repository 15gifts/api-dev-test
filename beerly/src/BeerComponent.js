import React from "react"
import Card from 'react-bootstrap/Card'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
// here we use the values from the api basic react resuable component stuff 
class BeerComponent extends React.Component {   

    render(){
        return (
            <>
    <Card id="myCard"   text="dark"  >
  <Card.Img variant="top" id="beerimg" className="beerimg" src={this.props.imglink} />
  <Card.Body  >
    <Card.Title id="names" text="primary">{this.props.name}</Card.Title>
    
  </Card.Body>
  <ListGroup id="listc" className="flush listG">
    <ListGroupItem>`"{this.props.youknow}"`</ListGroupItem>
    <ListGroupItem>Description: {this.props.brew}  </ListGroupItem>
    <ListGroupItem>First Brewed : {this.props.ipo} </ListGroupItem>
  </ListGroup>
  
</Card>
            </>
        )
        }
  }

export default BeerComponent