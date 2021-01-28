import React, { Component } from 'react'
import '../clock/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Row,Col,Container} from "react-bootstrap";

class Clock_old extends Component {
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

    getWeekDate() {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        var n = weekday[d.getDay()];
        return n;
      }

    getMonth(){
        var p = new Date();
        var monthName = {
            "01":"Jan",
            "02":"Feb",
            "03":"Mar",
            "04":"Apr",
            "05":"May",
            "06":"Jun",
            "07":"Jul",
            "08":"Aug",
            "09":"Sep",
            "10":"Oct",
            "11":"Nov",
            "12":"Dec",
        };
        var m = p.toLocaleDateString();
        var q = m.substring(3, 5);
        var month = monthName[q];
        return month;
    }
    getYear(){
        var d = new Date();
        var q = d.toLocaleDateString();
        var year = q.substring(6,10);
        return year;
    }
    getDate(){
        var d = new Date();
        var q = d.toLocaleDateString();
        var date = q.substring(0,2);
        return date;
    }
    
    render() {
        //console.log('lifecycle 2')
        const { time } = this.state
        const str = time.toLocaleTimeString()
        //console.log(strDate.substring(3, 5))//打印出月份
        //const weekday = this.gettingDate()
        //console.log(weekday)
        const month = this.getMonth()
        const weekDate = this.getWeekDate() 
        const year = this.getYear()
        const date = this.getDate()
        
        var moment = require('moment-timezone');
        var text= moment().tz("Asia/Seoul").toString();
        console.log(text)//首尔时间 明天直接抄

        var moment = require('moment-timezone');
        var text= moment().tz("Europe/London").toString();
        console.log(text)//伦敦时间 明天直接抄

        var moment = require('moment-timezone');
        var text= moment().tz("America/New_York").toString();
        console.log(text)//纽约时间 明天直接抄

        //明天放两个function将字符串分割即可 然后jsx写法可以参考之前的 写了一个剩下的就好写了
        
        return (
            <main>
                <h1>Brisbane</h1>
                <Container className="clock">
                <Row className="clock-date">
                    <h1>{weekDate} {month} {date} {year}</h1>
                </Row>
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
    </main>
            
         

        )
    }
}

export default Clock_old