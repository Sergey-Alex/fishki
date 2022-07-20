import React, {useEffect, useState} from "react";
import {clearInterval} from "timers";

export default {
    title: 'title'
}

export const SetTimeOutExample = () => {

    const getTime = () => {
        let date = new Date()
        let hr = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
        let min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
        let sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        return {hr, min, sec}
    }

    const [date, setDate] = useState(getTime());
    console.log('component')

    useEffect(() => {
        console.log('use eff')
        const id = setInterval(() => {
            console.log('set timeout')
            setDate(getTime())

        }, 1000)

        // return () => {
        //     clearInterval(id)
        // }
    }, [])


    return <>
        <div>{date.hr + ' ' + date.min + ' ' + date.sec}</div>
    </>
}