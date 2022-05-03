import Header from "../../components/Header";
import { NavBar } from "../../components";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [getProducts, setProducts] = useState([]);

  useEffect(() => {
    async function getAllTheProducts(request, response) {
      try {
        const res = await axios.get("http://localhost:4000/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        response.status(500).send({ error: error.message });
      }
    }
    getAllTheProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <div>
        <div>
          {getProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              rating={product.rating}
              image={product.mainImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
