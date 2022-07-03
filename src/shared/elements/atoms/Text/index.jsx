import PropTypes from "prop-types";

import withDynamicTag from "./style";

export const Text = ({ tag, type, className, children }) => {
  const StyledText = withDynamicTag;
  return (
    <StyledText tag={tag} type={type} className={className}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
};
