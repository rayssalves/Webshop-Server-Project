import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesChecklist from "../../components/Categories_CheckList";
import { PageLayoutWithBanner } from "../../layout/PageWithBanner";

export default function ShopPage() {
  const [getCategories, setCategories] = useState([]);
  const [getProducts, setProducts] = useState([]);

  useEffect(() => {
    async function getAllTheCategories() {
      try {
        const response = await axios.get("http://localhost:4000/categories");
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getAllTheCategories();
  }, []);

  useEffect(() => {
    async function getAllTheProducts() {
      try {
        const response = await axios.get("http://localhost:4000/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getAllTheProducts();
  }, []);

  // const filterByCategory = () => {

  // }

  /*
    // big component (state management)
    categoryStatus  = {
      0: false
      1: false
      2: false
      3: false
    }

    setCategoryStatus({
      ...categoryStatus,
      [id]: !categoryStatus[id]
    })

    prodcuts.filter(product => categoryStatus[product.categoryId])

  */

  return (
    <PageLayoutWithBanner>
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
    </PageLayoutWithBanner>
  );
}
