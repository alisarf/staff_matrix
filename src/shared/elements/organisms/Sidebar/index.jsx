import PropTypes from "prop-types";

import { Button, Logo, Text } from "../../atoms/index";
import {
  StyledSidebar,
  StyledSidebarSeparator,
  StyledSidebarSubtitle,
  StyledSidebarButton,
} from "./style";

// import icArrow from "../../../images/arrow.svg";

export const Sidebar = ({ unitD, changeU }) => {
  return (
    <StyledSidebar>
      <Logo />
      <StyledSidebarSeparator />
      <StyledSidebarSubtitle>
        <Text tag="h3" type="heading2" className="mtrx-dark-text-color">
          My units
        </Text>
      </StyledSidebarSubtitle>

      <nav>
        <ul>
          {/* {Object.keys(unitD).map((title, idx) => {
            return (
              <li key={idx}>
                <Button
                  className="Flex"
                  value={title}
                  onClick={(e) => changeU(e.target.value)}
                >
                  <img src={icArrow} />
                  {title.toUpperCase()}
                  {unitD[title].unitName.toUpperCase()}
                </Button>
              </li>
            );
          })} */}
        </ul>
      </nav>
      <StyledSidebarButton>
        <Button classButton="primary" size="md">
          Logout
        </Button>
      </StyledSidebarButton>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  unitD: PropTypes.object,
  changeU: PropTypes.func,
};
