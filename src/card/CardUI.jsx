import React from "react";
import img1 from '../assets/bg-3.png';
import {Button} from 'react-bootstrap';
import {Card} from "react-bootstrap";
import styles from './App.css';


const Carddesign = (props) => {
  return(
    <div className="card-container" style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <p className="card-big_title">Editor's Picks</p>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={img1} />
              <Card.Body>
                  <Card.Title style={{marginBottom:'0px' ,}} >Gifts for Him</Card.Title>
                  <Card.Text>
                      For Valentine's Day
                  </Card.Text>
              </Card.Body>
      </Card>
    </div>
  ) 
}
export default Carddesign;
