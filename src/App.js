import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Row>
          <Col md="4">
        <Cards 
         name="Pikachu" 
         type='electrique'
         img= 'https://pbs.twimg.com/profile_images/791917801409765376/e9Bfrx_D_400x400.jpg'
         life= {true} />
         </Col>
         <Col md="4">
        <Cards 
         name="Bulbizarre" 
         type='Plante'
         img= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMOjzFWdFSrBBpuFl3I2SqgtKz-AMSdPJ0uE1DG0afqjsbH60'
         life={false} />
         </Col>
         </Row>
         </Container>
      </div>
    );
  }
}

export default App;
