import React from 'react'

const Circle = (props) => {
  return (
    <div className='circle_main'>
        <span className='hero_cirlce' style={{
            borderRadius: props.border_radius,
            backgroundColor:props.color,
            width:props.width,
            height:props.height,
            border:props.border
        }}></span>
    </div>
  )
}

export default Circle