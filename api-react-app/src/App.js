import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Address } from './api/Address';
import { MultipleButtons } from './MultiButtons';
import { Movie } from './api/Movie';
import { MapContainer } from './api/Map';


function App() {
  return (
    <div className="App" style={{marginTop:"20px"}}>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<MultipleButtons />} />
        <Route path='/address' element={<Address />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/map' element={<MapContainer />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
