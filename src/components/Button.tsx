import styled from "styled-components";
import { ReactNode } from "react";
import { THEME } from "../constants";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  className,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={disabled !== undefined ? disabled : false}
      className={className ?? ""}
    >
      <StyledText>{children}</StyledText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border-radius: 12px;
  border: 3px solid ${THEME.colors.darkPink};
  background: linear-gradient(
    to right,
    ${THEME.colors.pink},
    ${THEME.colors.yellow}
  );
  color: ${THEME.colors.grey};
  padding: 18px;
  font-size: 16px;
  transition: all 250ms;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 6px 6px ${THEME.colors.darkPink};
    color: ${THEME.colors.grey}CC;
  }

  &:disabled {
    cursor: not-allowed;
    transform: translateY(0);
    box-shadow: 0 0;
    color: ${THEME.colors.grey};
    opacity: 0.8;
  }
`;

const StyledText = styled.h3`
  margin: 0;
`;

export default Button;
