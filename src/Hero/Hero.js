import React from 'react'
import Title from './Title'
import Button from './Button'
import Dot from './Dot'
import hero_img from './a_studio_hero.webp'
import Circle from './Circle'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero_main'>
        <div className="hero_second_main">
            <div className="hero_left">
                 {/* <h1 className="hero_heading">
                    A Digital Product Agency
                 </h1>
                 <p className='hero_description'>
                 Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                 </p> */}
                 <Title
                    heading='A Digital Product Agency'
                    description='Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.'
                 />
                 {/* <button className='hero_button'>Contact Now</button> */}
                 <Button 
                    title='Contact Now'
                    margin='30px 0px 0px 0px'
                 />
                 <Dot/>
            </div>
            <div className="hero_right">
                <div className="blue_circle">
                    <Circle
                        width='200px'
                        height='200px'
                        border_radius='50%'
                        color='#DAE9FF'
                    />
                </div>
                <div className="hero_img">
                    <img className='image' src={hero_img} alt="hello" />
                    <div className="yellow_circle">
                        <Circle
                            width='200px'
                            height='200px'
                            border_radius='0px 0px 100px 0px'
                            color='#FFF5DB'
                        />
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Hero