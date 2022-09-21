import "./App.css"
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Carts from "./components/Cart/Carts";
import Register from "./components/Auth/Register";
import { useEffect, useState } from "react";
import categoryApi from "./components/Api/categoryApi";
import Login from "./components/Auth/Login";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Collections from "./components/Collections/Collections";
import WWS from "./components/Tabs/Tab";
import ShopGG from "./components/Shop/ShopGG";


function App() {
  const [apiProducts, setApiProducts] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const huycode = {
        _limit: 5, // lấy 2 data thôi
      }
      const categoryList = await categoryApi.getAll(huycode);
      setApiProducts(categoryList);
      console.log(categoryList);
    }
    fetchCategory();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products apiProducts={apiProducts} />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/shop" element={<ShopGG />} />
        <Route path="/wws" element={<WWS />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
