import {ActionType} from "./UncontrolledAccordion";

const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: boolean, action: ActionType): boolean => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return !state
        default:
            throw new Error('bad action type')
    }

    return state
}