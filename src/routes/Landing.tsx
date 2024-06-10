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
  const [envelopeColour, setEnvelopeColour] = useState<string>("pink");
  const [letterPaper, setLetterPaper] = useState<string>("beige");

  const navigate = useNavigate();

  const saveData = async (uuid: string) => {
    await addDoc(collection(db, "messages"), {
      messageId: uuid,
      message,
      envelopeColour,
      letterPaper,
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
      <Spacer height={24} />
      <StyledInput
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your letter here!"
      />
      <Subheading>Envelope Colour</Subheading>
      <SelectWrapper>
        {Object.keys(ENVELOPE_COLOURS).map((colour, i) => (
          <RoundSelect
            key={i}
            fill={ENVELOPE_COLOURS[colour].fill}
            stroke={ENVELOPE_COLOURS[colour].stroke}
            onClick={() => setEnvelopeColour(colour)}
            selected={envelopeColour === colour}
          />
        ))}
      </SelectWrapper>
      <Subheading>Letter Paper</Subheading>
      <SelectWrapper>
        {Object.keys(LETTER_COLOURS).map((colour, i) => (
          <RoundSelect
            key={i}
            fill={LETTER_COLOURS[colour].fill}
            stroke={LETTER_COLOURS[colour].stroke}
            onClick={() => setLetterPaper(colour)}
            selected={letterPaper === colour}
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
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 0;
`;

const Subheading = styled.h2`
  margin: 28px 0 12px 0;
`;

const SelectWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Landing;
