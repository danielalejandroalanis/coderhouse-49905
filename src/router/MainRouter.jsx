import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";
import { CreateProduct } from "../pages/CreateProduct";
import { UpdateProduct } from "../pages/UpdateProduct";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
