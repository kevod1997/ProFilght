import React from 'react'
import rigth from '../images/rigth.png'


function ButtonRight({handleNextClick}) {
    return (
        <img src={rigth} alt='flecha izquierda' onClick={handleNextClick} style={{ height:'30px', width:'30px', background: `linear-gradient(233.16deg, #00B0CE -47.28%, rgba(0, 176, 206, 0.3) 73.34%)`, opacity:'100%', marginBottom:'150px'}}/>
    )
  }
  
  export default ButtonRight
  