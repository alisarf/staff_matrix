import PropTypes from "prop-types";

import { StyledButton } from "./styles";

export const Button = ({
  type = "button",
  classButton = "primary-outline",
  size = "lg",
  children,
  disabled = false,
  borderRadius = "0.5rem",
  style,
  active = false,
  className,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      classButton={classButton}
      disabled={disabled}
      active={active}
      onClick={onClick}
      borderRadius={borderRadius}
      size={size}
      style={style}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  classButton: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  borderRadius: PropTypes.string,
  style: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
