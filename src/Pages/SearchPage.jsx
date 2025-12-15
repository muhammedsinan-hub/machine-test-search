import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search by product name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards" style={{ marginTop: "20px" }}>
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
            
            <Link to={`/product/${item.id}`}><img src={item.image} alt="product"  width={"100px"}/></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
