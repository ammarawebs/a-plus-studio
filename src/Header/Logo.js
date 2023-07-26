import React from 'react'

const Logo = (props) => {
  return (
    <div className="logo_div" style={{
        width:props.width,
        margin: props.margin
    }}>
        <h1 className='a'>A+</h1>
        <p className='studio'>studio</p>
    </div>
  )
}

export default Logo