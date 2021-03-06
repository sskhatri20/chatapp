import React from 'react'
import './InfoBar.css'
import closeIcon from '../../Icons/closeIcon.png'
import onlineIcon from '../../Icons/onlineIcon.png'
export default function InfoBar({ room }) {
    return (
        <div className = "infoBar">
            <div className = "leftInnerContainer">
                <img className = "onlineIcon" src = {onlineIcon} alt = "online image" />
                <h3>Room {room}</h3>
            </div>
            <div className = "rightInnerContainer">
                <a href = '/'><img src = {closeIcon} alt = "close image" /></a>
            </div>
        </div>
    )
}
