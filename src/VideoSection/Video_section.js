import React from 'react'
import './video.css'
import video_thumb from './images/video_thumb.png'
import Button from '../Hero/Button'
import play_icon from './images/icons8-play-100.png'
import Circle from '../Hero/Circle'
import Title from '../Hero/Title'


const Video_section = () => {
  return (
    <div className='video_section_main'>
        <div className="video_second_main">
            <div className="left_video_section">
                <div className="video_thumb">
                    <div className="video_thumb_image">
                        <img src={video_thumb} alt="" />
                        <play_icon/>
                    </div>
                    <div className="play_btn">
                        <Button
                            image={play_icon}
                            padding='20px'
                            radius='200px'
                            imgWidth='35px'
                            imgHeight='35px'

                        />
                    </div>
                    
                </div>
                <div className="yellow_video_circle">
                    <Circle
                        width='150px'
                        height='150px'
                        color='#FFF5DB'
                        border_radius='50%'
                    />
                </div>
            </div>
            <div className="right_video_section">
                <div className="purple_circle">
                    <Circle
                        width='200px'
                        height='200px'
                        color='#EFF1FF'
                        border_radius='0px 0px 100px 0px'
                    />
                </div>
                <div className='video_section_title'>
                    <Title
                        heading='Great Digital Product Agency since 2016 '
                        description="Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements."
                        width='80%'
                    />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Video_section