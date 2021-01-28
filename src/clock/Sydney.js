import React, { Component } from 'react'
import '../clock/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Row,Col,Container} from "react-bootstrap";

class Sydeny extends Component {
    constructor() {
        super()
        this.state = {
            time: new Date(),
        }
        console.log('lifecycle 1')
        // when a component just born
        // not recommended to update a state
    }

    updateTime() {
        this.intervalId = setInterval(() => {
            // this.state = {}, => NOT RIGHT
            this.setState({
                time: new Date(),
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


    getDate(){
        var moment = require('moment-timezone');
        var seoul= moment().tz("Australia/Sydney").toString();
        var seoulDate = seoul.substring(0,15)
        return seoulDate
    }
    getTime(){
        var moment = require('moment-timezone');
        var seoul= moment().tz("Australia/Sydney").toString();
        var seoulTime = seoul.substring(16,25)
        return seoulTime
    }


        render() {
        //console.log('lifecycle 2')
        const { time } = this.state
        const str = time.toLocaleTimeString()
        //console.log(strDate.substring(3, 5))//打印出月份
        //const weekday = this.gettingDate()
        //console.log(weekday)
       // const month = this.getMonth()
        //const weekDate = this.getWeekDate() 
       // const year = this.getYear()
       // const date = this.getDate()
        

        
        return (
            <main>
                <h1 className="title-Sydeny">Sydeny</h1>
                <Container className="clock">
                    <Row className="clock-date">
                        <h1>{this.getDate()}</h1>
                    </Row>
                    <Row className="clock-position">
                        <h1>{this.getTime()}</h1>
                    </Row>
                </Container>
               
                
            </main>
            
         

        )
    }
}

export default Sydeny