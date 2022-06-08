import React, {ChangeEvent, useState} from "react";
import {action} from "@storybook/addon-actions";
import Rating from "../components/Rating/Rating";

export default {
    title: 'Input',


}

export const ControlledInput = () => {
    const [parenValue, setParenValue] = useState('');

    return <input value={parenValue} onChange={action('want bla bal bal')}/>
}
export const ControlledCheckbox = () => {
    const [value, setValue] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={value} onChange={onChangeHandler}/>

}





export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1');
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
        action('ss')
    }

    return (
        <select  defaultValue={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    )
}
