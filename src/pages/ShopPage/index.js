import "./style.css";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesChecklist from "../../components/CategoriesCheckList";
import { PageLayoutWithBanner } from "../../layout/PageWithBanner";

export default function ShopPage() {
  //Function to fetch all the CATEGORIES from the Database
  const [getCategories, setCategories] = useState([]);

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

  // Function to fetch all the PRODUCTS from the Database
  const [getProducts, setProducts] = useState([]);

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

  //Filters to get the specific products from the complete array
  const [categoryStatus, setCategoryStatus] = useState([]);

  // Map to build the checklist first state in this page.
  // The IDs came from the component. False is the unchecked state.
  // It will return an array of category objects, with Id and status [()]
  useEffect(() => {
    const categories = getCategories.map((category) => {
      return {
        id: category.id,
        status: false,
      };
    });
    //Set the first categoryStatus with this new array and make it remap when there is a change in the category
    // This means, everytime a checkbox change its state
    setCategoryStatus(categories);
  }, [getCategories]);

  //Based in the ID that returns in the previous map, we can make a filter in the products to get a new filtered array
  const getFilteredProducts = () => {
    const checkCategories = categoryStatus.filter(
      (category) => category.status === true
    );
    // The filter ALWAYS returns an array, so we need to check if there is at least an element from the filter
    // If it's an empty array, we return the no filtered products
    if (checkCategories.length === 0) {
      return getProducts;
    }
    // If there is something in the array, the products will be filtered based in the categories that were equals
    // Filter all the products where you find the same categories
    return getProducts.filter((product) => {
      return checkCategories.find(
        (category) => category.id === product.categoryId
      );
    });
  };

  // This is the function passed to the component as props.
  // It will receive back the categoryId from the checked checkboxes
  // This map will set a new value to the state and then change the CategoryStatus one more time
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
