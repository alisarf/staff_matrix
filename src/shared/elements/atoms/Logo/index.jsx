import LogoMrtx from "../../../../images/matrix.svg";

import { StyledLogo, StyledLogoImg, StyledLogoText } from "./style";

export const Logo = () => {
  return (
    <StyledLogo>
      <StyledLogoImg src={LogoMrtx} alt="logo" />
      <StyledLogoText className="mtrx-very-dark-text-color">
        Matrix
      </StyledLogoText>
    </StyledLogo>
  );
};
