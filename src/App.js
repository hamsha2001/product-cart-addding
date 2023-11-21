import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { ShopContextProvider } from "./Context/Shop-Context";
import { Shop } from "../src/pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Context from "./components/Context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Context" element = { <Context /> } ></Route>
          </Routes> 
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
