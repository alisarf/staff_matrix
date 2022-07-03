import styled from "styled-components";
import { ResponsiveBreakpoint } from "../../../../styles/mixins/index";

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  position: sticky;
  top: 0;
  display: none;
  height: 100vh;

  ${ResponsiveBreakpoint.md`
    display: block;
    padding: 1.3rem;
  `};

  ${ResponsiveBreakpoint.lg`
    padding: 2rem;
  `}
`;

export const StyledSidebarSeparator = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  height: 4px;
  background-color: var(--grey-700);
`;

export const StyledSidebarSubtitle = styled.div`
  margin-top: 4rem;
  display: none;

  ${ResponsiveBreakpoint.lg`
    display: block;
  `};
`;

export const StyledSidebarButton = styled.div`
  ${ResponsiveBreakpoint.md`
    display: none;
  `};

  ${ResponsiveBreakpoint.lg`
    display: block;
  `}
`;
