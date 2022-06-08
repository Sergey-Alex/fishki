import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RatingPropsType} from "./components/Rating/Rating";
import {OnOff} from "./components/On-Off/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import CustomSelect from "./CustomSelect/CustomSelect";

// function hello() {
//     debugger
//     console.log('Hello IT kamasutra')
// }

function App() {
    // const [ratingValue, setRatingValue] = useState<RatingPropsType>(1)
    // const [accordionCollapsed, setAccordionCollapsed]  = useState<boolean>(false)

  //  const [uOnOff, setUOnOff] = useState<boolean>(true)

    
    return (
        <div>
            {/*<UncontrolledOnOff value={uOnOff} callBackUnOnOff = {setUOnOff}/>*/}
            {/*<AppTitle/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClickRating = {setRatingValue}/>*/}
            {/*<Accordion*/}
            {/*    setAccordionCollapsed = {setAccordionCollapsed}*/}
            {/*    titleValue = 'Menu'*/}
            {/*    collapsed = {accordionCollapsed}/>*/}
            {/*<Accordion titleValue = 'Users' collapsed={false}/>*/}
            {/*<OnOff value = {true}/>*/}
            {/*<UncontrolledAccordion title='Menu'/>*/}
            {/*<UncontrolledAccordion title='Users'/>*/}
        </div>
    );
}

export default App;



