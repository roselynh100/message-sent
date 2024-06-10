import styled from "styled-components";
import { Check } from "../assets";

type RoundSelectProps = {
  fill: string;
  stroke: string;
  onClick: () => void;
  selected: boolean;
};

const RoundSelect: React.FC<RoundSelectProps> = ({
  fill,
  stroke,
  onClick,
  selected,
}) => {
  return (
    <Circle fill={fill} stroke={stroke} onClick={onClick}>
      {selected && <Checkmark src={Check} alt="checkmark" />}
    </Circle>
  );
};

const Circle = styled.div<{ fill: string; stroke: string }>`
  background-color: ${(props) => props.fill};
  border: 3px solid ${(props) => props.stroke};
  height: 100px;
  width: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  transition: all 250ms;

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`;

const Checkmark = styled.img`
  width: 60px;
`;

export default RoundSelect;
