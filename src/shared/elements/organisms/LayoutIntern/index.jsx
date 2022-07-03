import PropTypes from "prop-types";

import { StyledLayoutIntern } from "./style";

export const LayoutIntern = ({ className, children }) => {
  return (
    <StyledLayoutIntern className={className}>{children}</StyledLayoutIntern>
  );
};

LayoutIntern.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};
