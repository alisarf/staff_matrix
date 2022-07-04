import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 700;
  padding: 7px 60px;
  background-color: ${({ bg }) => bg || "#7879F1"};
  color: ${({ color }) => color || "#FFFFFF"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
