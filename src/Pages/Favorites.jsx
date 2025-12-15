import { useContext } from "react";
import { FavContext } from "../Context/Favcontext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites } = useContext(FavContext);

  return (
    <div style={{ padding: "20px" }}>
      <div className="product">
      <h2>Favorite Products</h2>

      {favorites.length === 0 && <p>No favorites added yet.</p>}

      {favorites.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <Link to={`/product/${item.id}`}>
            {item.title}
            <img src={item.image} alt="" width={"100px"}/>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Favorites;
