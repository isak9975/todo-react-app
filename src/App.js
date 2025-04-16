import logo from './logo.svg';
import logo1 from './고양6-3.png';
import './App.css';
import Todo from './Todo';
import {Example} from './Example.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React
        </a> */}
        <Example/>
        <Todo />
        
      </header>
    </div>
  );
}

export default App;
