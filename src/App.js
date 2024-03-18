import NavBar from "./Components/Navbar/NavBar";
import Cart from './Pages/Cart';
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/classic" element={<ShopCategory category="classic"/>}></Route>
          <Route path="/modern" element={<ShopCategory category="modern"/>}></Route>
          <Route path="/antic" element={<ShopCategory category="antic"/>}></Route>
          <Route path="/product" element={<Product/>}>
            <Route path=":productID" element={<Product/>}></Route>
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>}></Route>

        </Routes>


      </BrowserRouter>
      
    </div>
  );
}

export default App;
