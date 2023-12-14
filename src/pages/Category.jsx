import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import { useGetProductByCategory } from '../hooks/useProducts';

export const Category = () => {
    
    const {id} = useParams();

    const {productsData} = useGetProductByCategory(id)

  return (
    <ItemListContainer productsData={productsData} />
  )
}
