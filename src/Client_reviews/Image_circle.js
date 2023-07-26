import React from 'react'

const Image_circle = (props) => {
  return (
    <img  src={props.image} alt="" style={{
        width: props.width,
        margin: props.margin
    }} />
  )
}

export default Image_circle