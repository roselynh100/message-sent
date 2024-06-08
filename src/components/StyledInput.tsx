import styled from "styled-components";
import { theme } from "../theme";

const StyledInput = styled.textarea`
  width: 60%;
  border-radius: 8px;
  border: 3px solid ${theme.colors.blue};
  padding: 18px;
  line-height: 26px;
  font-family: Arial;
  font-size: 20px;
  resize: none;
  color: ${theme.colors.grey};

  &:focus {
    outline: none !important;
    border-color: ${theme.colors.yellow};
  }
`;

export default StyledInput;
