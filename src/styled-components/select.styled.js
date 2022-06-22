import styled from "styled-components";

export const Select = styled.select`
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
