import "./style.css";

export default function CategoriesChecklist() {
  return (
    <div>
      <div>
        <h2>Categories</h2>
      </div>
      <div className="categories-list">
        <label>
          <input type="checkbox" />
          Eletronics
        </label>
        <label>
          <input type="checkbox" />
          Jewelery
        </label>
        <label>
          <input type="checkbox" />
          Men's clothing
        </label>
        <label>
          <input type="checkbox" />
          Women's clothing
        </label>
      </div>
    </div>
  );
}
