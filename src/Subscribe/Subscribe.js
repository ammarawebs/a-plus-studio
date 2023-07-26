import React from 'react'
import Circle from '../Hero/Circle'
import Title from '../Hero/Title'
import Button from '../Hero/Button'
import Dot from '../Hero/Dot'

import './subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe_main'>
        <div className="subscribe_second_main">
            <div className="subscribe_yellow_section">
                <Circle
                    width='250px'
                    height= '250px'
                    color='#FFF5DB'
                    border_radius='0px 0px 0px 100px'
                />
            </div>
            <div className="subscribe_newsletter">
                <div className="subscribe_newsletter_bg">
                    <div className="subscribe_gray_section">
                        <Circle
                            width='100%'
                            height='40vh'
                            color='#F4F9FF'
                            border_radius='100px'
                        />
                    </div>
                    <div className="subscribe_blue_section">
                        <Circle

                            color='#2639ED'
                            width='45%'
                            height='40vh'
                            border_radius='200px 100px 100px 300px'
                            
                        />
                </div>
                
                </div>
                <div className="subscribe_newsletter_fg">
                    <div className="subscribe_title">
                        <Title
                            heading='Subscribe Newsletter'
                            description='I will update good news and promotion service not spam'
                            lineHeight='20px'
                            Dwidth='100%'
                        />
                    </div>
                    <div className="subscribe_email">
                        <div className="email_banner">
                            <input className='subscribe_input' type="text" placeholder='Enter your email address..'  />
                            <Button
                                title='Contact Me'
                                font_size='18px'
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="subscribe_dot_section"> 
                <Dot/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe