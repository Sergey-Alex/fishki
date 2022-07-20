import React, {useEffect, useState} from 'react';

import './ClockStyle.scss'
import {clearInterval} from "timers";

const Clock = (props:any) => {
    // let date = new Date()
    // let hr =  date.getHours();
    // let minute = date.getMinutes();
    // let second =  date.getSeconds();

    // const [seconds, setSeconds] = useState(second);
    // const [minutes, setMinutes] = useState(minute);
    // const [hours, setHours] = useState(hr);

 //   const [date, setDate] = useState(new Date());
    const getTime = () => {
        let date = new Date()
        let hr = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
        let min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
        let sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        return {hr, min, sec}
    }

    const [date, setDate] = useState(getTime());


    useEffect(() => {
      let id =  setInterval(() => {
            setDate(getTime())
        }, 1000)
        // setMinutes(minutes)
        // setHours(hours)

        return () => {
        //   clearInterval(id)
        }
    },[])

    const secondsStyle = {
        transform: `rotate(${+getTime().sec * 6}deg)`
    }
    const minuteStyle = {
        transform: `rotate(${+getTime().min * 6}deg)`
    }

    const hourStyle = {
        transform: `rotate(${+getTime().hr * 30}deg)`
    }

    return (
        <div className={"clock"}>
            <h3>Clock</h3>
            {props.isDigitalMode ?
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minuteStyle}/>
                <div className={"dial hours"} style={hourStyle}/>
            </div>
           : <div className={"digital-clock"}>
                {+getTime().hr + ':' + +getTime().min + ':' + getTime().sec}
            </div>}
            <button onClick={props.setDigital}>change mode time</button>
        </div>
    );
};

export default Clock;
