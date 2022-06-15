import React, {useState} from 'react';
import Rating, {RatingPropsType, RatingType} from "./Rating";

export default {
    title: 'Rating Stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} onClickRating={(x) => (x)}/>
export const RatingStars1 = () => <Rating value={1} onClickRating={(x) => (x)}/>
export const RatingStars2 = () => <Rating value={2} onClickRating={(x) => (x)}/>
export const RatingStars3 = () => <Rating value={3} onClickRating={(x) => (x)}/>
export const RatingStars4 = () => <Rating value={4} onClickRating={(x) => (x)}/>
export const RatingStars5 = () => <Rating value={5} onClickRating={(x) => (x)}/>


export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingPropsType>(3);
  return <Rating value={rating} onClickRating={setRating}/>
}
