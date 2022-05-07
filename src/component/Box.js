import React from 'react'

function Box(props) {
   
    const style = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }
    
   
  return (
    <div style = {style} 
    className='box' 
    onClick={() => props.toggle(props.id)}>
    </div>
  )
}

export default Box