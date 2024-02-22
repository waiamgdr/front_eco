
import React from 'react'
import v1 from '../../assets/video.mp4'
import './video.css'
const Video = () => {
    return (
        <div className="video-container">
            <video autoPlay loop muted>
                <source src={v1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Video