
//Componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountComponent from './components/CountComponent/CountComponent';

//Estilos
//Importacion de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a mi tienda!" />
      {/* <ItemListContainer greeting="Este es otro componente" myFunction={() => alert("test")}/>
      <ItemListContainer greeting ="Este es otro componente mas" /> */}

      <CountComponent />
    </div>
  );
}

export default App;
