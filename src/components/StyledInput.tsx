import styled from "styled-components";
import { THEME } from "../constants";

const StyledInput = styled.textarea`
  width: 60%;
  border-radius: 8px;
  border: 3px solid ${THEME.colors.blue};
  padding: 18px;
  line-height: 26px;
  font-family: Arial;
  font-size: 20px;
  resize: none;
  color: ${THEME.colors.grey};

  &:focus {
    outline: none !important;
    border-color: ${THEME.colors.yellow};
  }
`;

export default StyledInput;
