import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';
import { NavBar } from './components/NavBar/NavBar';



function App() {

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting = 'Bienvenidos a taurus store' />
      
      </div>
    </>
  )
}

export default App
