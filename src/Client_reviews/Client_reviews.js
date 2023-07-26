import React from 'react'
import Title from '../Hero/Title'
import Dot from '../Hero/Dot'
import client_img from './images/client_img.png'
import Circle from '../Hero/Circle'
import One_dot from '../Hero/One_dot'
import red_girl from './images/red_girl.png'
import black_hat from './images/black_hat-boy.png'
import purple_girl from './images/purple_girl.png'
import blue_girl from './images/blue_girl.png'
import gray_shirt from './images/gray_shirt_guy.png'
import black_girl from './images/black_girl.png'
import bald_guy from './images/bald_guy.png'
import pink_girl from './images/pink_girl.png'
import Image_circle from './Image_circle'
import './reviews.css'

const Client_reviews = () => {
  return (
    <div className='Client_reviews_main'>
        <div className="client_reviews_second_main">
            <div className="reviews_section_heading">
                <Title
                    heading='What our happy client say'
                    description='Several selected clients, who already believe in our service.'
                    align='center'
                    Dwidth='100%'
                    lineHeight='30px'
                    

                />
            </div>
            <div className="below_content">
                <div className="client_image_section">
                    <div className="client_dot_section">
                        <Dot/>
                    </div>
                    <div className="client_img_div">
                        <img src={client_img} alt=''/>
                    </div>
                    <div className='red_border_circle_div'>

                        <Circle
                            width='150px'
                            height='150px'
                            border='10px solid #FF007A'
                            border_radius='50%'
                        />
                    </div>
                </div>
                <div className="client_reviews_div">
                    <div className="reviews_title_div">
                        <Title
                            heading='Matthew Paul'
                            description='Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.'
                            h_font_size='25px'
                        />
                    </div>
                    <div className="dots_slides_div">
                        <One_dot
                            width='15px'
                            height='15px'
                            color='#2639ED'
                        />
                        <One_dot
                            width='15px'
                            height='15px'
                            color='#E7F0FC'
                        />
                        <One_dot
                            width='15px'
                            height='15px'
                            color='#E7F0FC'
                        />
                        <One_dot
                            width='15px'
                            height='15px'
                            color='#E7F0FC'
                        />
                        <One_dot
                            width='15px'
                            height='15px'
                            color='#E7F0FC'
                        />
                    </div>
                </div>
                <div className="client_images_circle_div">
                    <div className="client_image_circle_bg">
                        <div className="circle_bg_div">
                            <Circle
                                width='250px'
                                height='250px'
                                color='#FFF5DB'
                                border_radius='50%'
                            />
                        </div>
                        
                    </div>
                    <div className="client_image_circle_fg">
                        <div className="red_girl_div">
                            <Image_circle 
                                image={red_girl}
                                width='120px'
                                margin='-80px 0px 60px 0px'
                            /> 
                            <Image_circle 
                                image={black_hat}
                                width='90px'
                                margin='0px 0px 0px 0px'
                            />                            
                        </div>
                        <div className="purple_girl_div">
                            <Image_circle 
                                image={purple_girl}
                                width='90px'
                                margin='0px 0px 60px 0px'
                            /> 
                            <Image_circle 
                                image={blue_girl}
                                width='170px'
                                margin='0px 0px 60px 0px'
                            /> 
                            <Image_circle 
                                image={gray_shirt}
                                width='120px'
                                margin='0px 0px 60px -30px'
                            /> 
                        </div>
                        <div className="black_girl_div">
                            <Image_circle 
                                image={black_girl}
                                width='70px'
                                margin='0px 0px 00px -60px'
                            /> 
                            <Image_circle 
                                image={bald_guy}
                                width='70px'
                                margin='0px 0px 0px 0px'
                            /> 
                            <Image_circle 
                                image={pink_girl}
                                width='90px'
                                margin='0px 0px 0px -70px'
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client_reviews