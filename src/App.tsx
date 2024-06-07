import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./firebaseConfig";

import Landing from "./routes/Landing";
import Letter from "./routes/Letter";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/:letterId" element={<Letter />} />
          <Route path="*" element={<p>nothing here</p>} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: grey;
  height: 100vh;
  padding: 128px 64px;
`;

export default App;
