import { useEffect, useState } from "react";
import "./toolkit.css";


function Toolkit({position, children}){
   const [isVisible, setIsVisible] = useState(false);

//    const tooltipStyle = {
//     top:position === 'top' ? '200px': 'auto',
//     bottom:position === 'bottom' ? '-300px': 'auto',
//     left:position === 'left' ? '1020px': 'auto',
//     right:position === 'right' ? '-670px': 'auto'
//    }

//    const tooltipStyleOne = {
//     left:position === 'top' ? '450px': 'auto',
  
//    }

//    const tooltipStyleTwo = {
//     top: position === 'right' ? '190px': 'auto',
//     left: position=== 'bottom' ? '440px' : 'auto',
//    }
   

//    const mergedTooltipStyles = { ...tooltipStyle, ...tooltipStyleOne, ...tooltipStyleTwo };



  
   return(
    <>
       <div className="tooltip-container" onMouseEnter={()=> setIsVisible(true)} onMouseOut={()=> setIsVisible(false)}>
           {children}
           {isVisible &&  <div className={`tooltip tooltip-${position}`} >Thanks for hovering! I'm a tootip</div>}
       </div>
    </>
   )
}

export default Toolkit;