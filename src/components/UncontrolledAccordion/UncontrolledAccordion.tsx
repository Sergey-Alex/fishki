import React, {useReducer} from "react";
import {reducer} from "./Reducer";

export type AccordionType = {
    title: string
}

export type ActionType = {
    type: string
}

const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'


export  function UncontrolledAccordion(props: AccordionType) {


//    const [toggle, setToggle] = useState(false)
    let [state, dispatch] = useReducer( reducer,{collapsed:false} )

    const toggleMoved = () => {
        dispatch({type:TOGGLE_COLLAPSED})
    }


    return <>
        <AccordionTitle title={props.title} toggleMoved={toggleMoved}/>
        {!state.collapsed && <AccordionBody/>}
    </>

}
type AccordionTitleType = {
    title: string
    toggleMoved: () => void
}

function AccordionTitle({title, toggleMoved}: AccordionTitleType) {
    return <h3 onClick={toggleMoved}>{title}</h3>
}

function AccordionBody() {

    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}