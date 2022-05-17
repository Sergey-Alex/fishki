    import React from "react";


    type AccordionTypeProps = {
        titleValue: string
        collapsed: boolean
        setAccordionCollapsed: (collapsed: boolean) => void
    }


    export default function Accordion(props: AccordionTypeProps) {

        return <div>
            <AccordionTitle title={props.titleValue}
                            accordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}

        </div>

    }

    type AccordionTitleType = {
        title: string
        accordionCollapsed: (collapsed: boolean) => void
        collapsed: boolean
    }

    function AccordionTitle(props: AccordionTitleType) {
        return <div>
            <h3 onClick={() => props.accordionCollapsed(!props.collapsed)}>{props.title}</h3>

        </div>
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