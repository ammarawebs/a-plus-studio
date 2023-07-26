import React from 'react'

const One_dot = (props) => {
  return (
    <span className='dot' style={{
        width:props.width,
        height:props.height,
        backgroundColor:props.color,

    }}></span>
  )
}

export default One_dot