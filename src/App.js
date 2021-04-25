import {ART} from 'react-native'
import avatar from './images/me.jpg'
import './App.css';

function spawnCircle() {
  const circle = ART.Path()
    .move(2, 0)
    .arc(0, 4, 2)
    .arc(0, -4, 2)
  
  return circle.print()
}

function App() {
  
  
  return (
    <div className="App" onClick={spawnCircle}>
      
      <header className="App-header">
        <p>
          Hi there!
        </p>
        <img id="avatar" src={avatar} alt="Me"></img>
      </header>
    </div>
  );
}

export default App;
