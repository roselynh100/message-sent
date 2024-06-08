import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Note } from "../assets";
import styled from "styled-components";

const Letter = () => {
  const db = getFirestore();
  const location = useLocation();
  const letterId = location.pathname.split("/")[1];

  const [letter, setLetter] = useState<any>();

  const fetchData = async () => {
    const q = query(collection(db, "messages"), where("id", "==", letterId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setLetter(doc.data());
    });
  };

  return (
    <div>
      <NoteImg src={Note} />
      <button onClick={() => fetchData()}>hi</button>
      <button onClick={() => console.log(letter)}>owo</button>
    </div>
  );
};

export default Letter;

const NoteImg = styled.img`
  height: 70vh;
`;
