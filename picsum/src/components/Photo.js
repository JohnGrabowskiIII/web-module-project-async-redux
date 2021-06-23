import { connect } from "react-redux"


const Photo = props => {

    return (
        <>
            <img src={props.responseURL} ></img>
        </>
    )

}

const mapStateToProps = state => {
    return {
        responseURL: state.responseURL
    }
}

export default connect(mapStateToProps)(Photo)