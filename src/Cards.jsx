import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Cards.css';




class Cards extends Component {
    constructor(props){
        super(props)
        this.state={
            isDead: props.life,
            color: ""
        }
    this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        if(!this.state.isDead){
            this.setState({
                color:'red'
            })
            console.log("Je suis décédé rip in peace")
            
        }else if(this.state.isDead){
            this.setState({color:'green'})
            console.log(`Je suis un ${this.props.name} de type ${this.props.type} `)
            
        }

    }
    render(){
        return (
            <div className={this.state.color}>
                <Card  >
                <CardImg top width="100%" className="img-fluid" src={this.props.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardSubtitle>{this.props.type}</CardSubtitle>
                        <Button onClick={this.handleClick}>Parler</Button>
                    </CardBody>
                </Card>
            </div>
    );
    }
};

export default Cards;