import { useEffect, useState } from "react";
import "./tooltip.css";


function Tooltip({position, children}){
   const [isVisible, setIsVisible] = useState(false);
  
   return(
    <>
       <div className="tooltip-container" onMouseEnter={()=> setIsVisible(true)} onMouseOut={()=> setIsVisible(false)}>
           {children}
           {isVisible &&  <div className={`tooltip tooltip-${position}`} >Thanks for hovering! I'm a tootip</div>}
       </div>
    </>
   )
}

export default Tooltip;