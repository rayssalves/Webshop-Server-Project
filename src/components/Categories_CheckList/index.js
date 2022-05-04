import "./style.css";
import { useState } from "react";

export default function CategoriesChecklist(props) {
  const [checkbox, setCheckbox] = useState(false);

  // const handleCheck = () => {
  //   setCheckbox(!checkbox);
  //   props.updateCategoryStatus(props.id);
  // };

  const checkboxChange = () => {
    setCheckbox(!checkbox);
  };
  console.log(checkbox);

  return (
    <div key={props.id} checked={checkbox} onChange={checkboxChange}>
      <label>
        <input type="checkbox" />
        {props.title}
      </label>
    </div>
  );
}
