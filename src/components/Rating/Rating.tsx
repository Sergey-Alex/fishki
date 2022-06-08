import React from "react";

export type RatingPropsType = 0| 1 | 2 | 3 | 4 | 5

export type RatingType = {
    value: RatingPropsType
    onClickRating: (value:RatingPropsType) => void
}
export default function Rating({value, onClickRating}:RatingType) {
    return <div>
        <Star selected = {value > 0} value = {1} onClickRating = {onClickRating}/>
        <Star selected = {value > 1} value = {2} onClickRating = {onClickRating}/>
        <Star selected = {value > 2} value = {3} onClickRating = {onClickRating}/>
        <Star selected = {value > 3} value = {4} onClickRating = {onClickRating}/>
        <Star selected = {value > 4} value = {5} onClickRating = {onClickRating}/>
    </div>
}

type StarPropsType = {
    value: RatingPropsType
    selected: boolean
    onClickRating: (value: RatingPropsType) => void
}

function  Star(props: StarPropsType) {
        return <span onClick={() => props.onClickRating(props.value)}>{props.selected ? <b>star</b> : 'star'}  </span>

}