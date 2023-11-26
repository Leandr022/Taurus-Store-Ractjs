import { ItemListContainer as Home } from './components/ItemListContainer/itemListContainer';
import { BrowserRouter as Router , Routes, Route , Navigate} from 'react-router-dom'
import ItemCounter from './components/ItemCounter/ItemCounter';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { CartContext } from './contexts/CartContext';
import { CartContextProvider } from './contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const onAdd = (cantidad) =>{
    console.log ('La cantidad seleccionada es: ', cantidad) 

  }
  
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


        <ItemCounter intial={1} stock={6} onAdd={onAdd} />
      </div>
      </CartContextProvider>
    </Router>
    </>
  )
}

export default App
