import styled from "styled-components";
import { theme } from "../theme";
import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={disabled !== undefined ? disabled : false}
    >
      <StyledText>{children}</StyledText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border-radius: 12px;
  border: 3px solid ${theme.colors.darkPink};
  background: linear-gradient(
    to right,
    ${theme.colors.pink},
    ${theme.colors.yellow}
  );
  color: ${theme.colors.grey};
  padding: 18px;
  font-size: 16px;
  transition: all 250ms;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px ${theme.colors.darkPink};
    color: ${theme.colors.grey}CC;
  }

  &:disabled {
    cursor: not-allowed;
    transform: translateY(0);
    box-shadow: 0 0;
    color: ${theme.colors.grey};
    opacity: 0.8;
  }
`;

const StyledText = styled.h3`
  margin: 0;
`;

export default Button;
