import React from 'react'
import { AiOutlineArrowUp } from "react-icons/ai";
import './scroll.css'


const Scroll_btn = React.forwardRef((props, ref) => {
  return (
    <>
        <div className="scroll_btn" ref={ref}>
            <button className="scroll_to_top" onClick={props.onClick}>
                <AiOutlineArrowUp/>
            </button>
        </div>
    </>
  )
})

export default Scroll_btn