import * as React from "react"; 
import {aboutDiv, divider, description, title, contentDiv} from "./About.module.css"
import {rectangle} from "./Title.module.css"

const About = ()=>{

    const [rotatingText, changeRotatingText] = React.useState("Idea, to reality. ")


    return (
        <div className={aboutDiv}>
            <div className={divider}><p>Idea, to reality.</p></div>
            <div className={contentDiv}>
                <div className={title}>"WHO ARE WE?"</div>
                <div className={description}>WE ARE A PRODUCTION COLLECTIVE BASED IN ALBUQUERQUE, NEW MEXICO. WE ALSO FACILITATE THE LA CUEVA HIGH SCHOOL BEAT / PRODUCTION CLUB.</div>
            </div>
        </div>
    )
}

export default About; 