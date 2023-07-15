import { useState } from 'react';
import GameComponent from './Game';
import './App.css';

const App = () => {

  const [x,setX] = useState(10);
  const [y,setY] = useState(10);
  const [Game,setGame] = useState(false);

  function Start(){
    setGame(true)
  }



  return (
      Game === false ?  (
        <div id="UIback">
          <div id='UI'>

            <div> Snake</div>
            <label>  X: <input type='number' onChange={(e) => setX(e.target.value)} ></input>  </label>
            <label>  Y: <input type='number' onChange={(e) => setY(e.target.value)} ></input>  </label>
            <button onClick={Start.bind(this)}>Start</button>

          </div>
        </div>
      )
      :(<GameComponent x={x} y={y}/>)
  );


}

export default App;
