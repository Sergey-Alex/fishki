import React, {useEffect, useState} from 'react';
import classes from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type CustomSelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

const CustomSelect = (props: CustomSelectPropsType) => {
    const [active, setActive] = useState(false);
    const [hoveredElement, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)
    //const optionValue = props.items.filter(item => )

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const itemClicked = (value: any) => {
        props.onChange(value)
        setActive(false)
    }
    return (
            <div className={classes.select + ' ' + (active ? classes.active : '')}>
                <span onClick={() => setActive(!active)}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={classes.items}>
                        {props.items.map(item => <div

                            key={item.value}
                            onClick={() =>itemClicked(item.value)}
                        >{item.title}</div>)}
                    </div>
                }

            </div>

    )
}


export default CustomSelect;
