
//Componentes
// import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CountComponent from './components/CountComponent/CountComponent';
import MainLayout from './layouts/MainLayout';

//Estilos
//Importacion de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <MainLayout title="Titulo">
      <ItemListContainer greeting="Bienvenidos a mi tienda!" propiedadPrueba='loquesea' />
      {/* <ItemListContainer greeting="Este es otro componente" myFunction={() => alert("test")}/>
      <ItemListContainer greeting ="Este es otro componente mas" /> */}
      <CountComponent />
    </MainLayout>
  );
}

export default App;
