import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Note } from "../assets";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button";
import Spacer from "../components/Spacer";
import Envelope from "../components/Envelope";

const Letter = () => {
  const db = getFirestore();
  const location = useLocation();
  const letterId = location.pathname.split("/")[1];

  const [letter, setLetter] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const q = query(
        collection(db, "messages"),
        where("messageId", "==", letterId)
      );

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
      <Spacer height={24} />
      {letter && (
        <>
          <EnvelopeWrapper>
            <Envelope fill={letter.fill} stroke={letter.stroke} />
          </EnvelopeWrapper>
          <NoteWrapper>
            <NoteImg src={Note} />
            <Message>{letter.message}</Message>
          </NoteWrapper>
        </>
      )}
      <Spacer height={24} />
      <Button onClick={() => navigate("/")}>
        Want to write your own letter?
      </Button>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EnvelopeWrapper = styled.div`
  position: absolute;
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
  margin: 0;
  padding: 0 32px;
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
  width: min(50vw, 60vh);
  animation: ${floatUpAnimation} 1.5s ease;
`;

const NoteImg = styled.img`
  grid-area: 1/1;
  width: 100%;
`;

const Message = styled.p`
  grid-area: 1/1;
  max-width: 100%;
  margin: 24px;
  font-size: 18px;
  white-space: pre-line;
`;

export default Letter;
