import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
// import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { getDoc, doc, getFirestore } from "firebase/firestore";
export const Cart = () => {
  const [products, setProducts] = useState([]);
  const { count } = useContext(CartContext);

  const idList = count.map((item) => item.id);

  useEffect(() => {
    const db = getFirestore();
    for (let i = 0; i < idList.length; i++) {
      const docRef = doc(db, "products", idList[i]);
      getDoc(docRef).then((doc) => {
        setProducts((prevState) => [
          ...prevState,
          { id: doc.id, ...doc.data() },
        ]);
      });
    }
  }, [count]);

//   useEffect(() => {
//       const db = getFirestore();
//       const itemCollection = collection(db, "products");
//       const q = query(itemCollection, where("id", "in", ['dQ4TpHcYkDP3cGyNgykO']));

//       getDocs(q)
//         .then((snapshot) => {
//           if (snapshot.empty) {
//               console.log("No results!");
//           } else {
//               setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data().index
//               })));
//               console.log(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
//           }
//         })
//         .catch(error => {
//             console.error("Error fetching documents: ", error);
//         });
//   }, [count]);

  return count.length === 0 ? <h1>No hay productos en el carrito</h1> : null;
};
