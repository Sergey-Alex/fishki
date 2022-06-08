import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
}


export const onMode = () => <OnOff value={true} onClick = {action('on clicked')}/>
export const offMode = () => <OnOff value={false} onClick = {action('off clicked')}/>

// export const modeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
//     return <OnOff value={value} onClick = {() => setValue(!value)}/>
// }