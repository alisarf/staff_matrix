import Icon from "../../atoms/Icon";
import { StyledHeader, StyledMenu } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledMenu>
        <Icon name="icMenu" />
      </StyledMenu>
    </StyledHeader>
  );
};
