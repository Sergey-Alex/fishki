import React, {useState} from 'react';
import classes from './onoff.module.css'

type OnOffType = {
    value: boolean
}

const OnOff = ({value} : OnOffType) => {

    const [colorRing, setColorRing] = useState(value)


    console.log(colorRing)
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

export default OnOff;