import './App.css';
import pitch from './static/pitch.png';

function App() {
  function addPlayer() {
    return (
      <div>
        JESTEM STWORZONY HAHAHAHAHAH
      </div>
    )
  }

  return (
    <div className='Main'>
      <img src={pitch} alt="Pitch" class="Pitch"/>
      <div className='Menu'>
        <button type="button" onClick={addPlayer}>Add our player</button>
      </div>
    </div>
  );
}

export default App;
