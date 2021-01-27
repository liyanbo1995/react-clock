import React, { Component } from 'react'
import '../clock/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Row,Col,Container} from "react-bootstrap";

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            time: new Date()
        }
        console.log('lifecycle 1')
        // when a component just born
        // not recommended to update a state
    }

    updateTime() {
        this.intervalId = setInterval(() => {
            // this.state = {}, => NOT RIGHT
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentDidMount() {
        console.log('lifecycle 3')
        // do an api call
        // when a component DOM is ready
        this.updateTime()
    }

    componentWillUnmount() {
        console.log('lifecycle 4')
        clearInterval(this.intervalId)
    }

    render() {
        console.log('lifecycle 2')
        const { time } = this.state
        const str = time.toLocaleTimeString()
        
        return (
            <Container className="clock">
                <Row className="clock-position">
                    <Row>
                        <Col className="clock-time">
                            <h1>{ str.substring(0, 2) }</h1>
                        </Col>
                    </Row>
                    <Row>
                        <h1 className="clock-time_colon">:</h1>
                    </Row>
                    <Row>
                        <Col className="clock-time">
                            <h1>{ str.substring(3, 5) }</h1>
                        </Col>
                    </Row>
                    <Row>
                        <h1 className="clock-time_colon">:</h1>
                    </Row>
                    <Row>
                        <Col className="clock-time">
                            <h1>{ str.substring(6, 8) }</h1>
                        </Col>
                    </Row>
                </Row>
            </Container>
         

        )
    }
}

export default Clock