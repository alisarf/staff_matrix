import styled from "styled-components";
import { ResponsiveBreakpoint } from "../../../../styles/mixins/index";

export const StyledLayoutIntern = styled.main`
  grid-area: content;
  padding: 1rem;
  background-color: var(--grey-800);

  ${ResponsiveBreakpoint.lg`
    padding: 2rem;
  `}
`;
