import React from 'react'
import { useState } from 'react';
import Cell from './Cell'



const GameComponent = props => {
    
    const [score,setScore] = useState(0);

    const cells = [];

    for (let row = 1; row <= props.y; row++) {
        for (let col = 1; col <= props.x; col++) {
          cells.push(<Cell col={col} row={row}/>);
        }
      }




    const gridStyle = {
        gridTemplateColumns: `repeat(${props.x}, 1fr)`,
    };

    return(
       <div>

        <div id="Header">
            <button onClick={() => props.SwitchStart()}>MENU</button>
            <div id="Score"> {score}</div>
        </div>


        <div id='Game'>  
            <div id='Board' style={gridStyle}>
                {cells}
            </div>
        </div>


       </div>
    )
}

export default GameComponent