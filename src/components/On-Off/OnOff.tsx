import React, {useState} from 'react';
import classes from './onoff.module.css'

export type OnOffType = {
    value: boolean
    onClick: () => void
}

 export const OnOff = ({value} : OnOffType) => {

    const [colorRing, setColorRing] = useState(value)


    const changeColor = () => {
          setColorRing(!colorRing)
    }

    return (
        <div className={classes.wrapper}>
                <button onClick={changeColor} className={colorRing ?  classes.on : classes.off }>
                    {!colorRing ? 'ON' : 'OFF'}
                </button>
                <div className={`${classes.ring} ${colorRing ? classes.colorRing : ''}`}>
                </div>
        </div>
    );
};

