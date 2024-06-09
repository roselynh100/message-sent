import React from "react";

type EnvelopeProps = {
  fill: string;
  stroke: string;
};

const Envelope: React.FC<EnvelopeProps> = ({ fill, stroke }) => {
  return (
    <svg
      width="100%"
      viewBox="0 0 259 189"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="187.5"
        width="186"
        height="256"
        transform="rotate(-90 1.5 187.5)"
        fill={fill}
        stroke={stroke}
        stroke-width="3"
      />
      <path
        d="M256.289 2H2.69534C1.76788 2 1.34007 3.15309 2.0431 3.75801L128.35 112.441C128.724 112.763 129.277 112.764 129.652 112.443L256.938 3.76049C257.645 3.15703 257.218 2 256.289 2Z"
        stroke={stroke}
        stroke-width="3"
      />
      <path d="M1.5 187.5L104 92" stroke={stroke} stroke-width="3" />
      <path d="M154 92L256.5 187.5" stroke={stroke} stroke-width="3" />
    </svg>
  );
};

export default Envelope;
