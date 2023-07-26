import React from 'react'

const Title = (props) => {
  return (
    <div className='title_main' style={{
        alignItems: props.align,
        lineHeight:props.lineHeight,
        margin:props.margin
        
    }}>
        <h1 className="hero_heading" style={{
            fontSize:props.h_font_size,
            width: props.width
        }}>
                {props.heading}
         </h1>
         <p className='hero_description' style={{
          width:props.Dwidth
         }}>
             {props.description}
         </p>
    </div>
  )
}

export default Title