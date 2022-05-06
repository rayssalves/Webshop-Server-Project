import "./style.css";
import { useEffect, useState } from "react";

export default function CategoriesChecklist(props) {
  const checkboxChange = () => {
    props.setCategoryState(props.id);
  };

  useEffect(() => {
    if (props.checkbox) {
      checkboxChange();
    }
    // Update the document title using the browser API
  }, []);
  console.log(props);
  return (
    <div className="categories-list" key={props.id}>
      <label>
        <input
          type="checkbox"
          id={props.id}
          onClick={checkboxChange}
          checked={props.checkbox}
        />
        {props.title}
      </label>
    </div>
  );
}
