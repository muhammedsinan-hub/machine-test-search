import { Routes, Route, Link } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import ProductDetail from "./Pages/ProductDetail";
import Favorites from "./Pages/Favorites";

function App() {
  return (
    <div>
    
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>Search</Link>
        <Link to="product">Product</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
