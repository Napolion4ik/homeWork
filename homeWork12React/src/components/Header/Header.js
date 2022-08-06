import { Link, NavLink } from "react-router-dom";
import "./header.css";
function Header({ setDark }) {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/" />
          <div className="header__nav">
            <NavLink className="header__nav--link" to="aboutus">
              About Us
            </NavLink>
            <NavLink className="header__nav--link" to="todoList">
              Sticker
            </NavLink>
            <NavLink className="header__nav--link" to="contacts">
              Contacts
            </NavLink>
          </div>
          <button
            className="them-button"
            onClick={() => setDark((prevState) => !prevState)}
          >
            Theme
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
