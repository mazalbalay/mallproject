import FAQ from "./components/FAQ";
import { Routes, Route, Link } from "react-router-dom";
import InStore from "./components/InStore";
import HomeScreen from "./Manager/HomeScreen";
import ProductsScreen from "./Manager/ProductsScreen";
import AddProduct from "./Manager/AddProduct";
import EditProduct from "./Manager/EditProduct";

function App() {
  return (
    <div className="bg-gray-200 text-right flex flex-col items-center justify-center">
      <Routes>
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/products" element={<ProductsScreen />} />
        <Route exact path="/InStore" element={<InStore />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/products/:id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
