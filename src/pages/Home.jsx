import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer'
import { useGetProducts } from '../hooks/useProducts';

export const Home = () => {

  // Setear titulo de pagina
  useEffect(() => {
    document.title = "Mi tienda - Home";
  })

    const { productsData } = useGetProducts(15);


  return (
    <ItemListContainer productsData={productsData} />
  )
}
