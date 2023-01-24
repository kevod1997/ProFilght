import React from 'react'
import left from '../images/left.png'



function Button({handlePreviousClick}) {
    return (

        <img src={left} alt='flecha izquierda' onClick={handlePreviousClick} style={{ height:'30px', width:'30px', background: `linear-gradient(233.16deg, #00B0CE -47.28%, rgba(0, 176, 206, 0.3) 73.34%)`, marginBottom:'150px',opacity:'100%'}}/>

    )
  }
  
  export default Button
  
