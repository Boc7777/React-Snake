import { useState } from 'react';
import GameComponent from './Game';
import './App.css';

const App = () => {

  const [x,setX] = useState(10);
  const [y,setY] = useState(10);
  const [Game,setGame] = useState(false);

  function SwitchStart(){
    setGame(!Game)
  }



  return (
      Game === false ?  (
        <div id="UIback">
          <div id='UI'>

            <div> Snake</div>
            <label>  X: <input type='number' onChange={(e) => setX(e.target.value)} value={x}></input>  </label>
            <label>  Y: <input type='number' onChange={(e) => setY(e.target.value)} value={y}></input>  </label>
            <button onClick={SwitchStart.bind(this)}>Start</button>

          </div>
        </div>
      )
      :(<GameComponent x={x} y={y} SwitchStart={ SwitchStart.bind(this)} />)
  );


}

export default App;
