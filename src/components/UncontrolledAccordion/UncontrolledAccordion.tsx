import React, {useState} from "react";

type AccordionType = {
    title: string
}


export default function UncontrolledAccordion(props: AccordionType) {


    const [toggle, setToggle] = useState(false)

    const toggleMoved = () => {
        setToggle(!toggle)
    }


    return <>
        <AccordionTitle title={props.title} toggleMoved={toggleMoved}/>
        {!toggle && <AccordionBody/>}
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