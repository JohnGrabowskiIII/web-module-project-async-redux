
import { connect } from "react-redux"
import { useState } from "react"

import { FETCH_PHOTO, fetchPhoto } from "../actions/photoActions"

const Buttons = props => {

    const [photoSize, setPhotoSize] = useState({0: 400, 1: 0})
    const [checked, setChecked] = useState(false)

    const size = photoSize[1] ? `${photoSize[0]}/${photoSize[1]}` : photoSize[0]
    const buttonTextHeightUp = checked ? `Height ${photoSize[0]}px +` : `Size ${photoSize[0]}px +`
    const buttonTextHeightDown = checked ? `Height ${photoSize[0]}px -` : `Size ${photoSize[0]}px -`

    const incrementer = button => {
        switch (button) {
            case 'heightUp':
                setPhotoSize({...photoSize, 0: photoSize[0] + 100})
                break
            case 'heightDown':
                setPhotoSize({...photoSize, 0: photoSize[0] - 100})
                break
            case 'widthUp':
                setPhotoSize({...photoSize, 1: photoSize[1] + 100})
                break
            case 'widthDown':
                setPhotoSize({...photoSize, 1: photoSize[1] - 100})
                break
            default:
                console.log('incrementer default')
        }
    }

    return (
        <>
            <button onClick={() => props.fetchPhoto(size)} >New Photo</button>
            <button onClick={() => incrementer('heightUp')} >{buttonTextHeightUp}</button>
            <button onClick={() => incrementer('heightDown')} >{buttonTextHeightDown}</button>
            <button onClick={() => incrementer('widthUp')} >Width {photoSize[1]}px +</button>
            <button onClick={() => incrementer('widthDown')} >Width {photoSize[1]}px -</button>
            <label> Rectangle?
                <input type='checkbox' name='check' checked={checked} onChange={() => setChecked(!checked)} />
            </label>
        </>
    )

}

export default connect(null, {fetchPhoto})(Buttons)