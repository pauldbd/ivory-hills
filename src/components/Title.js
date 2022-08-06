import * as React from "react"; 
import {titleDiv, title, rectangle, circle, circle1, rectangle1, description} from "./Title.module.css"

const Title = ()=>{

    return (
        <div className={titleDiv}>
            <div className={circle} id={circle1}></div>
            {/* <div className={circle} id={circle2}></div> */}
            <div className={rectangle} id={rectangle1}></div>
            <div className={title}>
                <strong>IVORY HILLS</strong>
                <p>From an idea to music. </p>
            </div>
        </div>
    )
}

export default Title; 