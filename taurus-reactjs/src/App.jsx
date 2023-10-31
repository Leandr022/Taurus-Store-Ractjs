import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar.jsx/navBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer/>
      </div>
    </>
  )
}

export default App
