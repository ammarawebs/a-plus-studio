import React from 'react'
import Logo from '../Header/Logo'
import Social_icon from './Social_icon'
import facebook from './icons/facebook.png'
import twitter from './icons/Group.png'
import linkedin from './icons/linkedin.png'
import Title from '../Hero/Title'
import Footer_bar from './Footer_bar'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_main'>
        <div className="footer_second_main">
            <div className="footer_info_section">
                <Logo
                    margin='0px 0px -70px 0px'
                />
                <Title
                    description='Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.'
                    margin='0px 0px 20px 0px'

                />
                <div className="social_icons">
                    <Social_icon
                        icon={facebook}
                        margin='0px 20px 0px 0px'
                    />
                    <Social_icon
                        icon={twitter}
                        margin='0px 20px 0px 0px'
                    />
                    <Social_icon
                        icon={linkedin}
                        margin='0px 20px 0px 0px'
                    />

                    
                </div>
            </div>
            <div className="what_we_do">
                <Title
                    heading='What We Do'
                    h_font_size='20px'
                />
                <p>Web design</p>
                <p>App design</p>
                <p>Social Media Manage</p>
                <p>MArket Analysis Project</p>

            </div>
            <div className="company">
                <Title
                    heading='Company'
                    h_font_size='20px'
                />
                <p>About Us</p>
                <p>Career</p>
                <p>Become Investor</p>
                
            </div>
            <div className="support">
                <Title
                        heading='Support'
                        h_font_size='20px'
                    />
                    <p>FAQ</p>
                    <p>Policy</p>
                    <p>Business</p>
                </div>
            <div className="contact">
                <Title
                        heading='Contact'
                        h_font_size='20px'
                    />
                    <p>Whatsapp</p>
                    <p>Support 24</p>
                   
                </div>
        </div>
        <Footer_bar/>
    </div>
    
  )
}

export default Footer