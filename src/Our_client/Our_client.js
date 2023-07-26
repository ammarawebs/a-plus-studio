import React from 'react'
import './our_client.css'
import google from './images/google-logo-9834.png'
import airbnb from './images/pngwing.com.png'
import uberEats from './images/uber-eats-logo.png'
import amazon from './images/amazon-png-logo-vector-6701.png'
import Client_logo from './Client_logo'
import Title from '../Hero/Title'

const Our_client = () => {
  return (
    <div className='our_client_main'>
        <div className="our_client_second_main">
            <div className="title_section">
            <Title
                heading='Our Client'
                description='Several selected clients, who already believe in our service.'
            />


            </div>
            <div className="logo_section">
                <ul className='client_logo_ul'>
                    {/* <li className='client_logo_list'><img className='logo_sec_img' src={google} alt="" /></li> */}
                    <Client_logo img={google}/>
                    <Client_logo img={airbnb}/>
                    <Client_logo img={uberEats}/>
                    <Client_logo img={amazon}/>

                    {/* <li className='client_logo_list'><img className='logo_sec_img' src={airbnb} alt="" /></li>
                    <li className='client_logo_list'><img className='logo_sec_img' src={uberEats} alt="" /></li>
                    <li className='client_logo_list'><img className='logo_sec_img' src={amazon} alt="" /></li> */}
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Our_client