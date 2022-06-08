import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}
const callback =  action('on/off mode')

export const onMode = () => <UncontrolledOnOff  value={true} callBackOnOff={callback} />
export const offMode = () => <UncontrolledOnOff  value={false} callBackOnOff={callback}/>

export const modeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <UncontrolledOnOff value={value} callBackOnOff={() => setValue(!value)}/>
}