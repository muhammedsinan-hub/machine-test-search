import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavContext } from "../Context/Favcontext";


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { favorites, toggleFavorite } = useContext(FavContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const isFavorite = favorites.some(
    (item) => item.id === product.id
  );

return (
  <div>
    <div className="product">
      <h2>{product.title}</h2>

      <img src={product.image} alt={product.title} />

      <p>{product.description}</p>
      <p>
        <b>Price:</b> ${product.price}
      </p>

      <button onClick={() => toggleFavorite(product)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  </div>
);

}

export default ProductDetail;
