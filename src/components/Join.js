import * as React from "react"; 
import {joinDiv, divider, joinDescritption, circle1, circle2, circle3, circle4, japaneseIvoryHills, discordLetter, discordLogoImage, discordLogo, joinDescritptionDiv} from "./Join.module.css"
import discord from "../images/disc.png"

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const Join = ()=> {

    return (
        <div className={joinDiv}>
            <p className={japaneseIvoryHills}>アイボリーヒルズ</p>
            <div className={circle1}></div>
            <div className={circle2}>
                
                <div className={joinDescritptionDiv}>
                    <p className={joinDescritption}>
                        You can join the official La Cueava Beats & Production club, either by joining the discord or showing up to one of our weekly meetings.
                    </p>
                </div>
                <div className={discordLogo}>
                    <p className={discordLetter}>DISCORD</p>
                    <img src={discord} className={discordLogoImage} onClick={()=>{window.location.href = 'https://discord.gg/bnnZS4X46N';}}/>
                </div>
            </div>
            <div className={circle3}>
            </div>
            <div className={circle4}>
                <p>
                    JOIN US
                </p>
            </div>

            <div className={divider}><p>We make everything from trap, hip-hop, hyper-pop, to lofi. Tune in to our music at <a href="https://linktr.ee/abitpal">https://linktr.ee/abitpal</a></p></div>



        </div>
    )
}

export default Join; 