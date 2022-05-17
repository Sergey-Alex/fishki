import React from 'react';
import classes from './onoff.module.css'

type OnOffType = {
    value: boolean
    callBackUnOnOff: (value:boolean)=>void
}

const UncontrolledOnOff = (props : OnOffType) => {

    return (
        <div className={classes.wrapper}>
                <button onClick={()=>props.callBackUnOnOff(!props.value)} className={props.value ?  classes.on : classes.off }>
                    {!props.value ? 'ON' : 'OFF'}
                </button>
                <div className={`${classes.ring} ${props.value ? classes.colorRing : ''}`}>
                </div>
        </div>
    );
};

export default UncontrolledOnOff;