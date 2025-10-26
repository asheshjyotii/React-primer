import {nameAuthor, ageAuthor} from '../utils/constants'

const BodyComponent = () => {
    return (
    <div className="body-layout">
        <span className="body-text">This is the body</span>
        <span className="body-text">Name: {nameAuthor}</span>
        <span className="body-text">Age: {ageAuthor}</span>

        <button className="body-button">click me</button>
    </div>
    )
}

export default BodyComponent;