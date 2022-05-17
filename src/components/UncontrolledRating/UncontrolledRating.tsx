import React, {useState} from "react";

type RatingType = {
    value: 1 | 2 | 3 | 4 | 5
}
export default function Rating() {
    const [ratingNum, setRatingNum] = useState(0)

    const changeRating = (num:number) => {
        setRatingNum(num)
    }


    return <div>
        <Star selected = {ratingNum > 0} value = {1} changeRating={changeRating}/>
        <Star selected = {ratingNum > 1} value = {2} changeRating={changeRating}/>
        <Star selected = {ratingNum > 2} value = {3} changeRating={changeRating}/>
        <Star selected = {ratingNum > 3} value = {4} changeRating={changeRating}/>
        <Star selected = {ratingNum > 4} value = {5} changeRating={changeRating}/>
    </div>
}

type StarRatingType = {
    selected: boolean
    changeRating: (value:number)=>void
    value: number
}

function Star({selected, changeRating, value}: StarRatingType) {

    return  <span onClick={() => changeRating(value)} > {selected ? <b> star </b> : 'star' }</span>
}