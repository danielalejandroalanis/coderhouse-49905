import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";


async function getProducts () {
  const response = await axios.get('https://dummyjson.com/products')

  return response;
}

const App = () => {
  // const promesa = new Promise((resolve, reject) => {
  //   const flag = false;
  //   if (flag) {
  //     resolve("Promesa resuelta correctamente");
  //   } else {
  //     reject("Promesa se resuelve negativamente");
  //   }
  // });

  function obtenerProductos() {
    return new Promise((resolve, reject) => {
      try {
        const response = axios.get('https://dummyjson.com/products')
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
 
  

  obtenerProductos().then(res => console.log(res.data.products)).catch(error => console.log(error))
  
  const productsData = [
    {
      id: '1123jbhkbi1231n23o123',
      title: "producto 1",
      description: 'este es el producto 1',
      price: 100
    },
    {
      id: '1123jbhkbi1231n23o1ad3',
      title: "producto 2",
      description: 'este es el producto 2',
      price: 100
    }
  ]
  
  // promesa.then(res => console.log(res)).catch(error => console.error(error))
  
  const array = [1, 2, 3, 4, 5, 6, 7, 10]

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda" />
      <ul>
        {
          productsData.map((item) => {
            return (
              <li key={item.id}>{item.title}</li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default App;
