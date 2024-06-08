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
import styled, { keyframes } from "styled-components";

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

const fadeInHorizontal = keyframes`
  0% {
    -webkit-mask-size: 0%;
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0)
    );
  }
  100% {
    -webkit-mask-size: 100%;
    -webkit-mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0)
    );
  }
`;

const LetterHeading = styled.h1`
  margin: 0 0 24px 0;
  cursor: default;
  color: white;
  text-shadow: black 1px 0 10px;
  animation: ${fadeInHorizontal} 1.5s ease-in-out;
  -webkit-mask-repeat: no-repeat;
`;

const floatUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20vh);
  }

  100% {
    opacity: 1;
  }
`;

const NoteWrapper = styled.div`
  display: grid;
  grid-template: 1fr;
  height: 70vh;
  animation: ${floatUpAnimation} 1.5s ease;
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
