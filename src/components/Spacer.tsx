import styled from "styled-components";

type SpacerProps = {
  height: number;
};

const Spacer = styled.div<SpacerProps>`
  height: ${(props) => props.height}px;
  width: 100%;
`;

export default Spacer;
