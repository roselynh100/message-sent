import styled from "styled-components";
import { Check } from "../assets";

type ColourSelectProps = {
  fill: string;
  stroke: string;
  onClick: () => void;
  selected: boolean;
};

const ColourSelect: React.FC<ColourSelectProps> = ({
  fill,
  stroke,
  onClick,
  selected,
}) => {
  return (
    <ColourCircle fill={fill} stroke={stroke} onClick={onClick}>
      {selected && <Checkmark src={Check} alt="checkmark" />}
    </ColourCircle>
  );
};

const ColourCircle = styled.div<{ fill: string; stroke: string }>`
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

export default ColourSelect;
