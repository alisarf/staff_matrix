import PropTypes from "prop-types";

import {
  StyledGridContainer,
  StyledGridWrapper,
  StyledChildren,
} from "./styles";

export const GridWrapper = ({ className, children }) => {
  return (
    <StyledGridContainer className={className}>
      <StyledGridWrapper>
        <StyledChildren>{children}</StyledChildren>
      </StyledGridWrapper>
    </StyledGridContainer>
  );
};

GridWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};
