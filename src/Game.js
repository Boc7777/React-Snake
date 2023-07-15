import React from 'react'

const GameComponent = props => {
    
    const cells = [];

    for (let row = 1; row <= props.y; row++) {
        for (let col = 1; col <= props.x; col++) {
          cells.push(<div className='cell'></div>);
        }
      }


      const gridStyle = {
        gridTemplateColumns: `repeat(${props.x}, 1fr)`,
      };

    return(
        <div id='Game'>
            <div className='board' style={gridStyle}>
                {cells}
            </div>
       </div>
    )
}

export default GameComponent