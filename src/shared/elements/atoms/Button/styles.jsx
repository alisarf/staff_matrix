import styled, { css } from "styled-components";

const dynamicSize = (size) => {
  switch (size) {
    case "lg":
      return css`
        font-size: 18px;
      `;
    case "md":
      return css`
        font-size: 16px;
      `;
    case "sm":
      return css`
        font-size: 14px;
      `;
  }
};

export const StyledButton = styled.button`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  transition: all 0.2s linear;
  outline: none;

  font-family: var(--f-montserrat);
  font-weight: 500;
  width: 100%;
  padding: 0.5rem 1rem;

  ${({ classButton, disabled, active, size, borderRadius }) => {
    switch (classButton) {
      case "primary":
        return css`
          background-color: var(--purple-300);
          color: var(--grey-800);
          //box-shadow: 0px 0.2rem 0.7rem rgba(0, 0, 0, 0.25);
          ${dynamicSize(size)}
          ${disabled &&
          `
              &:disabled {
                background-color: var(--grey-400);
                box-shadow: none;
                color: var(--grey-900);
                cursor: default;
              }
            `};
          &:hover {
            background-color: var(--purple-200);
          }
        `;
      case "primary-outline":
        return css`
          border-color: var(--c-red-400);
          color: var(--c-red-400);

          ${dynamicSize(size)}
        `;
      case "gray-primary":
        return css`
          border-color: #eeeeee;
          background-color: #eeeeee;
          color: #a8a8a8;
          ${dynamicSize(size)}

          ${disabled &&
          `
              &:disabled {
                border-color: var(--c-disabled);
                background-color: var(--c-disabled);
                box-shadow: none;
                color: var(--c-white-800);
                cursor: default;
              }
            `};
        `;
    }
  }}

  ${({ borderRadius }) =>
    borderRadius &&
    `
     border-radius: ${borderRadius}
    `}
`;
