import { ItemListContainer } from "./components/ItemListContainer/itemListContainer"
import { NavBar } from "./components/NavBar/navBar"
import 'bootstrap/dist/css/bootstrap.min.css';

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
