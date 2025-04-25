import logo from './logo.svg';
import './App.css';
import { Sync,Async } from './Sync';
import {Fetch,Axios} from './Async'
import { FetchExam } from './FetctExam';
import { UserList } from './UserList';
import { BlogApp } from './Blog';
import { PromiseDemo } from './Prmise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <Sync/> */}
      {/* <Async/> */}
      {/* <Fetch/>
      <Axios/> */}
      {/* <FetchExam></FetchExam> */}
      {/* <UserList/> */}
      <PromiseDemo/>
      
      <BlogApp/>
      
      </header>
    </div>
  );
}

export default App;
