import "./Header.css";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(id);
  };
  return (
    <div className="container">
      <div className="left_side">
        <a onClick={() => handleClick("")}>Baldauren</a>
      </div>

      <div className="right_side">
        <a onClick={() => handleClick("about")}>About</a>
        <a onClick={() => handleClick("experience")}>Experience</a>
        <a onClick={() => handleClick("projects")}>Projects</a>
        <a onClick={() => handleClick("contacts")}>Contacts</a>
      </div>
    </div>
  );
}

export default Header;
