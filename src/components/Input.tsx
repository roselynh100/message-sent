import styled from "styled-components";

const Input = () => {
  return <StyledInput rows={10} />;
};

const StyledInput = styled.textarea`
  width: 60%;
  font-family: Arial;
  font-size: 20px;
`;

export default Input;
