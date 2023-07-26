import React from 'react'

const Button = (props) => {
  return (
    <div className='button_main' style={{
      margin:props.margin
    }}>
        <button className='hero_button' style={{
           padding:props.padding,
           border:props.radius,
           fontSize:props.font_size
        }}>{props.title}<img style={{
          width:props.imgWidth,
          height:props.imgHeight
        }} src={props.image}/></button>
    </div>
  )
}

export default Button