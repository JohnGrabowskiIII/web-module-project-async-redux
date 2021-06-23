
import { connect } from "react-redux"
import { useState } from "react"

import { FETCH_PHOTO, fetchPhoto } from "../actions/photoActions"

const Buttons = props => {

    const [photoSize, setPhotoSize] = useState([400, 0])
    const [checked, setChecked] = useState(false)

    const size = photoSize[1] ? `${photoSize[0]}/${photoSize[1]}` : photoSize[0]
    const buttonTextHeightUp = checked ? `Height ${photoSize[0]}px +` : `Size ${photoSize[0]}px +`
    const buttonTextHeightDown = checked ? `Height ${photoSize[0]}px -` : `Size ${photoSize[0]}px -`
    const display = checked ? 'true' : 'false'



    return (
        <>
            <button onClick={() => props.fetchPhoto(size)} >New Photo</button>
            <button>{buttonTextHeightUp}</button>
            <button>{buttonTextHeightDown}</button>
            <button >Width {photoSize[1]}px +</button>
            <button >Width {photoSize[1]}px -</button>
            <label> Rectangle?
                <input type='checkbox' name='check' checked={checked} onChange={() => setChecked(!checked)} />
            </label>
        </>
    )

}

export default connect(null, {fetchPhoto})(Buttons)