import React from "react";

type NoteProps = {
  fill: string;
  stroke: string;
};

const Note: React.FC<NoteProps> = ({ fill, stroke }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 184 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ gridArea: "1/1" }}
    >
      <rect
        x="0.5"
        y="0.5"
        width="183"
        height="252"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};

export default Note;
