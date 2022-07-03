import styled, { css } from "styled-components";
import { withDynamicTag } from "../../../../styles/mixins/index";

const dynamicTag = (type) => {
  switch (type) {
    case "heading1":
      return css`
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 2px;
      `;
    case "heading2":
      return css`
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 2px;
      `;
    // Add more styles..
    case "heading3":
      return css`
        font-size: 14px;
      `;
    case "heading4":
      return css`
        font-size: 14px;
      `;
    case "heading5":
      return css`
        font-size: 14px;
      `;
    case "paragraph1":
      return css`
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 2px;
      `;
    case "paragraph2":
      return css`
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.5px;
      `;
    case "paragraph3":
      return css`
        font-weight: 400;
        font-size: 13px;
        letter-spacing: 0.5px;
      `;
  }
};

const StyledText = styled.h1`
  ${({ type }) => {
    return css`
      ${dynamicTag(type)}
    `;
  }}
`;

export default withDynamicTag(StyledText);
