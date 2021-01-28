import React, { Component } from 'react'
import '../clock/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Row,Col,Container} from "react-bootstrap";
import Seoul from './Seoul'
import London from './London'
import New_York from './Newyork'
import Sydney from './Sydney';

class Clock extends Component {

        render() {
        return (
            <main>
                <Row>
                    <Col>
                        <Sydney/>
                    </Col>
                    <Col>
                        <Seoul />
                    </Col>
               
                    <Col>
                        <London />
                    </Col>
                  <Col>
                        <New_York />
                    </Col>
                </Row>
            </main>
            
         

        )
    }
}

export default Clock