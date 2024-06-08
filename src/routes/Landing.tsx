import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  const db = getFirestore();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const saveData = async (uuid: string) => {
    await addDoc(collection(db, "messages"), {
      messageId: uuid,
      message,
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
      <Button onClick={() => handleSubmit()} disabled={message.length < 1} />
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

export default Landing;
