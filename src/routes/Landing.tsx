import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
    <>
      <StyledInput
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your letter here!"
      />
      <Button onClick={() => handleSubmit()} />
    </>
  );
};

export default Landing;
