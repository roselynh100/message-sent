import styled from "styled-components";

const Button = () => {
  return (
    <ButtonWrapper>
      <StyledText>Send my letter!</StyledText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border-radius: 12px;
  background-color: pink;
  padding: 12px 18px;
  border: none;
  color: white;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const StyledText = styled.h3`
  margin: 0;
`;

export default Button;
