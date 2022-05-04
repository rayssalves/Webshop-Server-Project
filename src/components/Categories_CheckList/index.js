import "./style.css";
import { useState } from "react";

export default function CategoriesChecklist(props) {
  const [getCheckBox, setCheckBox] = useState(false);

  const checkboxChange = () => {
    setCheckBox(!getCheckBox);
  };
  console.log(getCheckBox);

  return (
    <div key={props.id} checked={getCheckBox} onChange={checkboxChange}>
      <label>
        <input type="checkbox" />
        {props.title}
      </label>
    </div>
  );
}

// return (
//   <div>
//     <label>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={checkboxChange}
//       />
//       My Value
//     </label>

//     <p>Is "My Value" checked? {checked.toString()}</p>
//   </div>
// );
// };
