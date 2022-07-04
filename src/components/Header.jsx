import PropTypes from "prop-types";
// Import Content
import "../css/style.css";

// Styled-Components
import { Button } from "./styled-components/button.styled";

// logo
import logo from "../images/matrix.svg";
import iconArrow from "../images/arrow.svg";

function Header({ unitD, changeU }) {
  return (
    <div className="Container__units">
      <div className="Flex Flex__row Flex__center">
        <img className="Logo" src={logo} alt="molecule logo" />
        <h1>Matrix</h1>
      </div>
      <hr></hr>
      <nav>
        <ul>
          {Object.keys(unitD).map((title, idx) => {
            return (
              <li key={idx}>
                <button
                  className="Flex"
                  value={title}
                  onClick={(e) => changeU(e.target.value)}
                >
                  <img src={iconArrow} />
                  {title.toUpperCase()}
                  {unitD[title].unitName.toUpperCase()}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button className="Button__logout">Logout</Button>
    </div>
  );
}

Header.propTypes = {
  unitD: PropTypes.object,
  changeU: PropTypes.func,
};

export default Header;