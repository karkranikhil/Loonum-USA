
import React, { useRef } from "react"
import './SimpleIdea.scss'
import PLAY_ICON from '../../images/SIMPLE_IDEA/Play.png'
import PAGE_PLAY from '../../images/SIMPLE_IDEA/PAGE_PLAY.png'
import VOLUME from '../../images/SIMPLE_IDEA/Volume.png'
import FULL_SCREEN from '../../images/SIMPLE_IDEA/FULL_SCREEN.png'


const SimpleIdea = () => {
    const videoRef = useRef(null)
    const playHandler = (event) => {
        let video = videoRef.current
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
    return (


        <div className="video_header">
            <div className="overlay"></div>
            <video ref={videoRef} src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" controls>
            </video>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <img src={PAGE_PLAY} alt="Page Play icon" />
                        {/* <h1 className="display-3">Video Header</h1>
                        <p className="lead mb-0">With HTML5 Video and Bootstrap 4</p> */}
                    </div>
                </div>
            </div>
            <div>
                <img src={PLAY_ICON} onClick={playHandler} alt="Play icon" className="play-icon" />
                <div className='video_progress progress_position'>
                    <div className='progress-filled'>   </div>
                </div>
                <img src={VOLUME} alt="Play icon" className="voice_position" />
                <img src={FULL_SCREEN} alt="Play icon" className="screen_big" />
            </div>
        </div>
    )
}

export default SimpleIdea

