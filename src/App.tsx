import styled from "styled-components";
import Button from "./components/Button";
import StyledInput from "./components/StyledInput";
import { useState } from "react";
import "./firebaseConfig";

import { getFirestore, addDoc, collection } from "firebase/firestore";

function App() {
  const db = getFirestore();
  console.log(db);
  const [message, setMessage] = useState("");

  const SaveData = async () => {
    const docRef = await addDoc(collection(db, "messages"), {
      message: "this is my second attempt at a message!",
      boolField: true,
    });
    alert("I write the document!");
  };

  return (
    <Wrapper>
      <StyledInput
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your letter here!"
      />
      <Button onClick={() => SaveData()} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: grey;
  height: 100vh;
`;

export default App;
