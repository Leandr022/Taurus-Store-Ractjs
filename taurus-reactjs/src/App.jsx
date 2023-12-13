import { ItemListContainer as Home} from './components/ItemListContainer/itemListContainer';
import { BrowserRouter as Router , Routes, Route , Navigate} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { CartContextProvider } from './contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Router>
      <CartContextProvider>
      <div className='container'>
        <NavBar />
        <Routes>
            <Route path='/' element={ <Home greeting='Bienvenidos a Taurus Store' /> }/>
            <Route path='/category/:cid' element={ <Home greeting= 'Bienvenidos a Taurus Store'/> }/>              
            <Route path='/detail/:pid' element={<ItemDetailContainer/> } />        
            <Route path='/cart' element={<CartContainer /> } />
            <Route path='*' element={ <Navigate to = '/'/> } />
        </Routes>
      </div>
      </CartContextProvider>
    </Router>
    </>
  )
}

export default App
