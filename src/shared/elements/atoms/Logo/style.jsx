import styled from "styled-components";

import { ResponsiveBreakpoint } from "../../../../styles/mixins/index";

export const StyledLogo = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;

  ${ResponsiveBreakpoint.lg`
     justify-content: start;
  `}
`;

export const StyledLogoImg = styled.img`
  max-width: 2.5rem;
`;

export const StyledLogoText = styled.p`
  display: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 4px;

  ${ResponsiveBreakpoint.lg`
    display: block;
  `}
`;
