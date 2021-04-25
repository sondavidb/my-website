import avatar from './images/me.jpg';
import './App.css';

function spawnCircle() {
  
}

function App() {
  return (
    <div className="App" onClick={spawnCircle}>
      <h1 id="topText">
        Hi there!
      </h1>
      
      <header className="App-header">
        <img src={avatar} alt="Me" id="avatar"></img>
        <h2 class="heading">About me</h2>
        <p id="bio">My name is David Son, and I'm currently a 
          sophomore working towards a bachelor's at the 
          Stevens Institute of Technology. I've been coding since 
          I was 10 years and haven't stopped since. With 6 years of education 
          and counting and 2 years of industry experience, I 
          look forward to continuing to code for as long as I can!</p>
      </header>

      <div classname="Education">
        
      </div>
      
    </div>
  );
}

export default App;
