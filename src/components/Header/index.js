import "./style.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h2>
          Products for every need, <br /> at the distance of a click
        </h2>
      </div>
      <div className="image-container">
        <img
          className="image-style-center"
          alt="Model"
          src="https://i.pinimg.com/564x/f6/a9/9f/f6a99fa955201cbad72448b4c674b5e0.jpg"
        />
      </div>
    </div>
  );
}
