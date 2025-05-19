import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Address } from './api/Address';
import { MultipleButtons } from './MultiButtons';

function App() {
  return (
    <div className="App" style={{marginTop:"20px"}}>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<MultipleButtons />} />
        <Route path='/address' element={<Address />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
