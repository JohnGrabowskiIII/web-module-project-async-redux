
import axios from 'axios'

export const FETCH_PHOTO = 'FETCH_PHOTO'
export const LOADING_PHOTO = 'LOADING_PHOTO'

export const fetchPhoto = (size) => (dispatch) => {
    axios.get(`https://picsum.photos/${size}`)
        .then(res => {
            dispatch({type: FETCH_PHOTO, payload: res.request.responseURL})
        })
        .catch(err => {
            dispatch({type: LOADING_PHOTO})
        })
}