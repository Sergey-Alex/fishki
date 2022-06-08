import React, {useState} from 'react';
import {UncontrolledRating} from "./UncontrolledRating";
import {RatingPropsType} from "../Rating/Rating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

export const EmptyRating = () => <UncontrolledRating  />
export const RatingStars1 = () => <UncontrolledRating />
export const RatingStars2 = () => <UncontrolledRating />
export const RatingStars3 = () => <UncontrolledRating />
export const RatingStars4 = () => <UncontrolledRating />
export const RatingStars5 = () => <UncontrolledRating />

export const RatingChanging = () => {
  return <UncontrolledRating />
}
