import { useParams } from "react-router-dom"
import { useGetProductById } from "../hooks/useProducts"
import { useState , useEffect} from "react"
import { doc, getFirestore, updateDoc } from "firebase/firestore"

export const UpdateProduct = () => {
    const { id } = useParams()

    const { productData } = useGetProductById("products", id)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {

      setTitle(productData.title)
      setDescription(productData.description)
      setPrice(productData.price)
      setThumbnail(productData.thumbnail)
      setCategory(productData.category)

    }, [productData])

    const handleUpdateProduct = () => {
      const data = {
        title,
        description,
        price,
        thumbnail,
        category,
      };
      
      const db = getFirestore();
      const productsCollection = doc(db, "products", id)
      
      updateDoc(productsCollection, data).then(() => {
        alert("Producto actualizado con éxito");
      });
    }

  return (
    <div>
      <h1>Crear nuevo Producto</h1>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Imagen"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />
      {/* <select
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select> */}
      <button onClick={handleUpdateProduct}>Actualizar producto</button>
    </div>
  )
}
