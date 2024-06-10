export const THEME = {
  colors: {
    pink: "#EDAFB8",
    darkPink: "#E58B98",
    yellow: "#E8DDB5",
    blue: "#95B8D1",
    purple: "#A675A1",
    grey: "#333333",
    white: "#F9F8F8",
  },
};

type EnvelopeColoursProps = {
  [key: string]: {
    fill: string;
    stroke: string;
  };
};

export const ENVELOPE_COLOURS: EnvelopeColoursProps = {
  pink: { fill: "#F49FBC", stroke: "#F07FA5" },
  green: { fill: "#C5E58A", stroke: "#ADDA58" },
  blue: { fill: "#7BDFF2", stroke: "#20C8E9" },
  purple: { fill: "#AA8FB7", stroke: "#8E6AA0" },
};

type LetterColourProps = {
  [key: string]: {
    fill: string;
    stroke: string;
    text: string;
  };
};

export const LETTER_COLOURS: LetterColourProps = {
  beige: { fill: "#FEE0AE", stroke: "#FEC872", text: THEME.colors.grey },
  grey: { fill: "#E1E0E1", stroke: "#CDCBCD", text: THEME.colors.grey },
  navy: { fill: "#2A3651", stroke: "#1C2436", text: THEME.colors.white },
  green: { fill: "#2A4422", stroke: "#21361C", text: THEME.colors.white },
};
