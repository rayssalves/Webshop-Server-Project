import "./style.css";
import { useState } from "react";

export default function CategoriesChecklist(props) {
  const [checkBox, setCheckBox] = useState(false);

  // const handleCheck = () => {
  // setCheckbox(!checkBox)
  // props.updateCategoryStatus(props.id)
  // };

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

  const checkboxChange = () => {
    setCheckBox(!checkBox);
  };
  console.log(checkBox);

  return (
    <div key={props.id} checked={checkBox} onChange={checkboxChange}>
      <label>
        <input type="checkbox" />
        {props.title}
      </label>
    </div>
  );
}
