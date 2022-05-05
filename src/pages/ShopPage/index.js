import "./style.css";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesChecklist from "../../components/CategoriesCheckList";
import { PageLayoutWithBanner } from "../../layout/PageWithBanner";

export default function ShopPage() {
  const [getCategories, setCategories] = useState([]);
  const [getProducts, setProducts] = useState([]);
  const [categoryStatus, setCategoryStatus] = useState([]);

  useEffect(() => {
    async function getAllTheCategories() {
      try {
        const response = await axios.get("http://localhost:4000/categories");
        return setCategories(response.data);
      } catch (error) {
        return console.log({ error: error.message });
      }
    }
    getAllTheCategories();
  }, []);

  useEffect(() => {
    async function getAllTheProducts() {
      try {
        const response = await axios.get("http://localhost:4000/products");
        return setProducts(response.data);
      } catch (error) {
        return console.log({ error: error.message });
      }
    }
    getAllTheProducts();
  }, []);

  useEffect(() => {
    const categories = getCategories.map((category) => {
      return {
        id: category.id,
        status: false,
      };
    });
    setCategoryStatus(categories);
  }, [getCategories]);

  const getFilteredProducts = () => {
    const checkCategories = categoryStatus.filter(
      (category) => category.status === true
    );
    if (checkCategories.length === 0) {
      return getProducts;
    }
    return getProducts.filter((product) => {
      return checkCategories.find(
        (category) => category.id === product.categoryId
      );
    });
  };

  const setCategoryState = (categoryId) => {
    const newCategoriesStatus = categoryStatus.map((category) => {
      if (category.id === categoryId) {
        return {
          id: category.id,
          status: !category.status,
        };
      }
      return category;
    });
    setCategoryStatus(newCategoriesStatus);
  };

  return (
    <PageLayoutWithBanner>
      <div className="shopPage-container">
        <div className="categories-component">
          <div className="categories-title">
            <h2>Categories</h2>
          </div>
          <div>
            {getCategories.map((category) => (
              <CategoriesChecklist
                key={category.id}
                id={category.id}
                title={category.title}
                setCategoryState={setCategoryState}
              />
            ))}
          </div>
        </div>
        <div className="products-container">
          <div className="productCard-container">
            {getFilteredProducts().map((product) => (
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
    </PageLayoutWithBanner>
  );
}
