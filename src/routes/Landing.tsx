import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import ColourSelect from "../components/ColourSelect";
import { ENVELOPE_COLOURS } from "../constants";

const Landing = () => {
  const db = getFirestore();

  const [message, setMessage] = useState<string>("");
  const [envelopeColour, setEnvelopeColour] = useState<{
    fill: string;
    stroke: string;
  }>({ fill: "", stroke: "" });

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
      <EnvelopeColourWrapper>
        {ENVELOPE_COLOURS.map((colour) => (
          <ColourSelect
            fill={colour.fill}
            stroke={colour.stroke}
            onClick={() =>
              setEnvelopeColour({ fill: colour.fill, stroke: colour.stroke })
            }
            selected={envelopeColour.fill === colour.fill}
          />
        ))}
      </EnvelopeColourWrapper>
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

const EnvelopeColourWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export default Landing;
