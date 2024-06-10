import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./firebaseConfig";

import Landing from "./routes/Landing";
import Letter from "./routes/Letter";
import { PixelBackground } from "./assets";

function App() {
  return (
    <Background>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/:letterId" element={<Letter />} />
            <Route path="*" element={<p>nothing here</p>} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  background: lightblue url("${PixelBackground}") no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  padding: 72px 64px;
`;

export default App;
