import React from "react";
import logoImg from "../../assets/Logo.png";
import headerImg from "../../assets/header.jpg";
import gitHubImg from "../../assets/github.svg";
import {
  Container,
  H1,
  Img,
  Logo,
  Nav,
  Ul,
  Li,
  A,
  HeaderImg,
  HEADER
} from "./styles";

export default function Header() {
  return (
    <HEADER>
      <HeaderImg src={headerImg} alt="header" />
      <Container>
        <Logo>
          <Img src={logoImg} alt="Jefferson Felizardo" />
        </Logo>
        <Nav>
          <Ul>
            <Li>
              <A href="/">Home</A>
            </Li>
            <Li>
              <A href="/">Sobre</A>
            </Li>
            <Li>
              <A href="/">Contato</A>{" "}
            </Li>
          </Ul>
        </Nav>
      </Container>
    </HEADER>
  );
}
