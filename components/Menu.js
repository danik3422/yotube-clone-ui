import styled from "styled-components";
import YoutubeLogo from "../public/logo.png";
import Image from "next/image";
const Container = styled.div`

  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size:14px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-item:center;
  gap: 5px;
  margin-bottom: 25px;
`;

const Item = styled.div`
  display:flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={YoutubeLogo} alt="YouTube Logo" height={25} />
          YouTube Clone
        </Logo>
        <Item>
          Home
        </Item>
        <Item>
          Explore
        </Item>
        <Item>
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          Library
        </Item>
        <Item>
          History
        </Item>
        <Hr/>
        <Item>
          Music
        </Item>
        <Item>
          Sports
        </Item>
        <Item>
          Gaming
        </Item>
        <Item>
          Movies
        </Item>
        <Item>
          News
        </Item>
        <Item>
          Live
        </Item>
        <Hr/>
        <Item>
          Settings
        </Item>
        <Item>
          Report
        </Item>
        <Item>
          Help
        </Item>
        <Item>
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu;
