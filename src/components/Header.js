import "./Header.css";
import { ImBooks } from "react-icons/im";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_container_logo_title">
          <ImBooks className="header_logo" />
          <h2 className="header_title">Book Store App</h2>
        </div>
        <div className="header_container_links_container">
          <p>Audiobooks</p>
          <p>Books</p>
          <p>About</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
