import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda" />
    </div>
  );
}

export default App;
