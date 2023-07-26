import React from 'react'

const Button = (props) => {
  return (
    <div className='button_main'>
        <button className='hero_button' style={{
           padding:props.padding,
           border:props.radius
        }}>{props.title}<img style={{
          width:props.imgWidth,
          height:props.imgHeight
        }} src={props.image}/></button>
    </div>
  )
}

export default Button