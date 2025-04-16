import logo from './logo.svg';
import logo1 from './고양6-3.png';
import './App.css';
import {Greeting, Farewell} from './Greetings';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React
        </a>
        
        <Greeting name="John" />
        <Farewell name="Lisa" />
        
        <Todo />
        
      </header>
    </div>
  );
}

export default App;
