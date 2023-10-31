import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar.jsx/navBar';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';


function App() {

  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a Taurus Store' />
    </div>

    </>
  )
}

export default App
