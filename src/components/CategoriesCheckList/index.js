import "./style.css";

export default function CategoriesChecklist(props) {
  const checkboxChange = () => {
    props.setCategoryState(props.id);
  };

  return (
    <div className="categories-list" key={props.id}>
      <label>
        <input
          type="checkbox"
          id={props.id}
          checked={props.checkbox}
          onClick={checkboxChange}
        />
        {props.title}
      </label>
    </div>
  );
}
