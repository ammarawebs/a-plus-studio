import React from 'react'

const Title = (props) => {
  return (
    <div className='title_main'>
        <h1 className="hero_heading">
                {props.heading}
         </h1>
         <p className='hero_description'>
             {props.description}
         </p>
    </div>
  )
}

export default Title