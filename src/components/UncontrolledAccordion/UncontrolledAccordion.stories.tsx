import React, {useState} from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('accordion mode change event fired')


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledAccordion title='Menu' />
}