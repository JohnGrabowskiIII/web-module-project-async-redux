
import { FETCH_PHOTO } from "../actions/photoActions"

const initialState = {
    responseURL: 'https://picsum.photos/400'
}

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTO:
            return {...state, responseURL: action.payload}
        default:
            return state
    }
}