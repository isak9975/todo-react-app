import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { UserProvider } from './UserContext';
import  {ThemeProvider}  from './ThemeContext';
import  {ThemeSwitch}  from './ThemeSwitch';
import { Header } from './Header';

function App() {

  return(
  <div>
    <Header/>
    
    <h2>App JS On</h2>
      


    {/* <UserProvider>
      <Parent/>
    </UserProvider>
    <ThemeProvider>
      <ThemeSwitch isDarkMode='true'/>
    </ThemeProvider> */}


  </div>
  )
}

export default App;
