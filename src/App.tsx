import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <Wrapper>
      <Button />
      <Input />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: grey;
  height: 100vh;
`;

export default App;
