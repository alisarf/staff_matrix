import styled from "styled-components";
import { ResponsiveBreakpoint } from "../../../../styles/mixins/index";

export const StyledGridContainer = styled.div``;

export const StyledGridWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-inline: auto;
  max-width: 1736px;
`;

export const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "content";

  ${ResponsiveBreakpoint.md`
    grid-template-columns: max(6rem) 1fr;
    grid-template-areas:
      "sidebar content";
  `}

  ${ResponsiveBreakpoint.lg`
  grid-template-columns: max(14rem) 1fr;
    grid-template-areas:
      "sidebar content";
  `}
`;
