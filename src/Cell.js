import React from 'react'
import { useState } from 'react';

const Cell = props => { 

  const [status,setStatus] = useState("white");

    return(

        <div id={`${props.col}/${props.row}`}  
         className={status === "white" ? "cell" : "cell_green"}
         onClick={() => setStatus("green")}>


         </div>

    )
}
export default Cell