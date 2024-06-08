import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Note } from "../assets";
import styled from "styled-components";

const Letter = () => {
  const db = getFirestore();
  const location = useLocation();
  const letterId = location.pathname.split("/")[1];

  const [letter, setLetter] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "messages"), where("id", "==", letterId));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setLetter(doc.data());
      });
    }
    fetchData();
  }, []);

  return (
    <Section>
      <LetterHeading>You&apos;ve received a letter!</LetterHeading>
      {letter && (
        <NoteWrapper>
          <NoteImg src={Note} />
          <Message>{letter.message}</Message>
        </NoteWrapper>
      )}
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: cool animation for this heading
const LetterHeading = styled.h2`
  margin: 0;
  padding: 0;
  cursor: default;
`;

const NoteWrapper = styled.div`
  display: grid;
  grid-template: 1fr;
  height: 70vh;
`;

const NoteImg = styled.img`
  grid-area: 1/1;
  height: 100%;
`;

const Message = styled.p`
  grid-area: 1/1;
  margin: 24px;
`;

export default Letter;
