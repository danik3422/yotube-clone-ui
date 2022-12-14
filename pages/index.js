import styled from "styled-components";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: white;
  color: black;
`;

const Wrapper = styled.div`
`;
export default function Home() {
  return (

    <Container>
      <Menu/>

      <Main>

        <Navbar/>
        <Wrapper>
          Video Content
        </Wrapper>

      </Main>
    </Container>
  )
}
