import React from 'react'
import Title from '../Hero/Title'

const Cards = (props) => {
  return (
    <>
        <div className="card">
                                <div className="icon_div" style={{
                                    backgroundColor:props.bg_color
                                }}>
                                    <img src={props.icon} alt="" />
                                    
                                </div>
                                <div className="card_title">
                                        <Title
                                            heading={props.heading}
                                            description={props.description}
                                            h_font_size='22px'
                                            align='center'
                                            align_self='center'
                                            Dwidth='100%'
                                            width='70%'

                                        />
                                    </div>
                            </div>
    </>
  )
}

export default Cards