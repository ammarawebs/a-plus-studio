import React from 'react'

const Dot = () => {

    

    const Dots = ()=>{
        const dot = <span className='dot'></span>
        const dot_array = []

        for(var i=0; i<20; i++){
            dot_array.push(dot)
        }

        return(dot_array)

    }
    
    const Dots_block = ()=>{
        const dot_line = <div className='dot_line'><Dots/></div>
        const dot_line_array = []

        for(var j=0; j<8; j++){
            dot_line_array.push(dot_line)
        }
        return(dot_line_array)
    }
  return (
    <div className='dot_main'>
        <Dots_block/>
        
        
    </div>
  )
}

export default Dot