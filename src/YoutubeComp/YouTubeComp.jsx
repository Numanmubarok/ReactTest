import React from 'react';
import './YouTubeComp.css'
import img from '../img/dingding.jpg'


const YouTubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={img} alt=""/>
                <p className="time">{props.time}</p> 
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

// YouTubeComp.defaultProps = {
//     time: '00.00',
//     title: 'Hallo!',
//     desc: 'iya ini desc'
// }
export default YouTubeComp;