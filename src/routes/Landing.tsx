import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { ENVELOPE_COLOURS, LETTER_COLOURS } from "../constants";
import RoundSelect from "../components/RoundSelect";

const Landing = () => {
  const db = getFirestore();

  const [message, setMessage] = useState<string>("");
  const [envelopeColour, setEnvelopeColour] = useState<{
    fill: string;
    stroke: string;
  }>({ fill: "", stroke: "" });
  const [letterPaper, setLetterPaper] = useState<{
    fill: string;
    stroke: string;
    text: string;
  }>({ fill: "", stroke: "", text: "" });

  const navigate = useNavigate();

  const saveData = async (uuid: string) => {
    await addDoc(collection(db, "messages"), {
      messageId: uuid,
      message,
      fill: envelopeColour.fill,
      stroke: envelopeColour.stroke,
    });
  };

  const handleSubmit = async () => {
    const uuid = uuidv4();
    await saveData(uuid);
    navigate("/" + uuid);
  };

  return (
    <Section>
      <Heading>Do you have a letter to send?</Heading>
      <StyledInput
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your letter here!"
      />
      <Spacer height={24} />
      <Subheading>Envelope Colour</Subheading>
      <SelectWrapper>
        {ENVELOPE_COLOURS.map((colour) => (
          <RoundSelect
            fill={colour.fill}
            stroke={colour.stroke}
            onClick={() =>
              setEnvelopeColour({ fill: colour.fill, stroke: colour.stroke })
            }
            selected={envelopeColour.fill === colour.fill}
          />
        ))}
      </SelectWrapper>
      <Subheading>Letter Paper</Subheading>
      <SelectWrapper>
        {LETTER_COLOURS.map((colour) => (
          <RoundSelect
            fill={colour.fill}
            stroke={colour.stroke}
            onClick={() =>
              setLetterPaper({
                fill: colour.fill,
                stroke: colour.stroke,
                text: colour.text,
              })
            }
            selected={letterPaper.fill === letterPaper.fill}
          />
        ))}
      </SelectWrapper>
      <Spacer height={24} />
      <Button onClick={() => handleSubmit()} disabled={message.length < 1}>
        Send my letter!
      </Button>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 0;
`;

const Subheading = styled.h2`
  margin: 0;
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export default Landing;
