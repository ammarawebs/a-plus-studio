import React from 'react'
import Circle from '../Hero/Circle'
import Dot from '../Hero/Dot'
import './business.css'
import Title from '../Hero/Title'
import searchBox from './icons/box.png'
import code from './icons/code.png'
import market from './icons/market.png'
import wallet from './icons/wallet.png'

import Cards from './Cards'


const Business = () => {
  return (
    <div className='business_main'>
        <div className="business_second_main">
            <div className="business_bg">
                <div className="left_decoration">
                    <div className="yellow_business_circle">
                        <Circle
                            width='250px'
                            height='250px'
                            border_radius='100px 0px 0px 0px'
                            color='#FFF5DB'
                        />
                    </div>
                    <div className="business_dots">
                        <Dot/>
                    </div>
                    
                </div>
                <div className="right_decoration">
                        <div className="blue_area_business">
                            <Circle 
                                width='100%'
                                height='80vh'
                                border_radius='300px 0px 0px 0px'
                                color='#F4F9FF'
                            />
                        </div>
                        <div className="red_border_circle">
                            <Circle
                                width='150px'
                                height='150px'
                                border_radius='50%'
                                border='10px solid #FF007A'

                            />
                        </div>
                </div>
            </div>
            <div className="business_fg">
                <div className="left_business_section">
                    <div className="business_title">
                        <Title
                            heading='How can we help your Business ?'
                            description='We build readymade websites, mobile applications, and elaborate online business services.'
                        />
                    </div>
                </div>
                <div className="right_business_section">
                    <div className="business_cards_section">
                        <div className="left_cards">
                            
                            <Cards
                                icon={searchBox}
                                bg_color='#F1F7FF'
                                heading='Business Idea Planning'
                                description='We present you a proposal and discuss niffty-gritty like'
                            />
                            <Cards
                                icon={code}
                                bg_color='#FFF2F8'
                                heading='Development Website and App'
                                description='Communication protocols apart from engagement models'
                            />

                        </div>
                        <div className="right_cards">
                            
                        <Cards
                                icon={wallet}
                                bg_color='#FFF7E3'
                                heading='Financial Planning System'
                                description='Protocols apart from aengage models, pricing billing'
                            />
                            <Cards
                                icon={market}
                                bg_color='#DEFFEE'
                                heading='Market Analysis Project'
                                description='Protocols apart from aengage models, pricing billing'
                            />
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Business