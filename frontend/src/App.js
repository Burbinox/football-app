import './App.css';
import pitch from './static/pitch.png';
import Draggable from 'react-draggable';

function App() {
  function addPlayer() {
    console.log(1)
    return (
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>
    )
  }

  return (
    <div className='Main'>
      <img src={pitch} alt="Pitch" className="Pitch"/>
      <div className='Menu'>
        <button type="button" onClick={addPlayer}>Add our player</button>
      </div>
    </div>
    
  );
}

export default App;
