import logo from './logo.svg';
import './App.css';
import Header from './components/Headers';
import CartPage from './Pages/CartPage';
import ProductList from './Pages/ProductList';
import {Route,Routes,Navigate} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/products"/>} /> /
        <Route path='/products' element={<ProductList />} /> /
          <Route path='/cart' element={<CartPage/>}/> /
      </Routes>
      
    </div>
  );
}

export default App;
