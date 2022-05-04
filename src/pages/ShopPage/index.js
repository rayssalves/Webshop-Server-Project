import Header from "../../components/Header";
import { NavBar } from "../../components";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesChecklist from "../../components/Categories_CheckList";

export default function ShopPage() {
  const [getCategories, setCategories] = useState([]);
  const [getProducts, setProducts] = useState([]);

  useEffect(() => {
    async function getAllTheCategories(request, response) {
      try {
        const res = await axios.get("http://localhost:4000/categories");
        console.log(res.data);
        setCategories(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getAllTheCategories();
  }, []);

  useEffect(() => {
    async function getAllTheProducts(request, response) {
      try {
        const res = await axios.get("http://localhost:4000/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getAllTheProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <div className="categories-list">
        <div>
          <h2>Categories</h2>
        </div>
        <div>
          {getCategories.map((category) => (
            <CategoriesChecklist
              key={category.id}
              id={category.id}
              title={category.title}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="productCard-container">
          {getProducts.map((product) => (
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
