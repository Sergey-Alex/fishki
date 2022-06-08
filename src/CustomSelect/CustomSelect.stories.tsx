import React, {ChangeEvent, useState} from "react";
import {action} from "@storybook/addon-actions";
import CustomSelect from "./CustomSelect";


export default {
    title: 'CustomSelect',
    component: CustomSelect

}

export const CustomSelectDriver = () => {
    const [value, setValue] = useState('1');
    return (
            <CustomSelect value={value}
                          onChange={setValue}
                          items={[
                              {title: 'Moscow', value: '1'},
                              {title: 'Voronezh', value: '2'},
                              {title: 'Sochi', value: '3'},
                          ]}/>
        )
}

export const selectWithoutValue = () =>{
    const [value, setValue] = useState(null);

    return (
        <CustomSelect
            onChange={setValue}
            value={value}
            items={[
                {title: 'Moscow', value: '1'},
                {title: 'Voronezh', value: '2'},
                {title: 'Sochi', value: '3'},
            ]}/>
    )
}




