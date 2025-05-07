import './App.css';
import { useState,useContext} from 'react';
import { Hello } from './pages/home';
import { Posts } from './pages/posts';
import { NavBar } from './navigation/navigation';
import { Route,Routes } from 'react-router-dom';
import { Settings } from './pages/settings';
import { ThemeContext } from './context/context';

function App() {
  const {theme,toggleTheme} = useContext(ThemeContext);

  const style1 = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#333' : '#f9f9f9',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
   };
//  style={`${style}`}

  return (
    <div className="App" style={style1} >
      <NavBar/>

      <Routes>
        <Route path='/src/pages/home.js' element ={<Hello/>}/>
        <Route path='/src/pages/posts.js' element={<Posts/>} />
        <Route path='/src/pages/settings.js' element={<Settings/>} />
      </Routes>
      
    </div>
  );
}

export default App;
