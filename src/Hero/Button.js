import React from 'react'

const Button = (props) => {
  return (
    <div className='button_main'>
        <button className='hero_button'>{props.title}</button>
    </div>
  )
}

export default Button