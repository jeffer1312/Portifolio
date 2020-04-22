import React, { useState, useEffect } from "react";
import Typical from "react-typical";

import logoImg from "../../assets/Logo1.png";

import gitHubImg from "../../assets/github.svg";
import {
  Container,
  TitleText,
  Img,
  Logo,
  Nav,
  Ul,
  Li,
  A,
  HEADER,
  Description,
  DescriptionText
} from "./styles";

export default function Header() {
  const [renderMsg, setRenderMsg] = useState(false);
  const teste = ["Desenvolvedor FullStack ", "Programador JavaScript "];
  const [frase, setFrase] = useState(teste[0]);

  return (
    <>
      <HEADER>
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
                <A href="/">Contato</A>
              </Li>
            </Ul>
          </Nav>
        </Container>
        <Description>
          <Container column>
            <TitleText>Jefferson Felizardo</TitleText>
            <DescriptionText>
              <Typical
                steps={[
                  "Desenvolvedor FullStack ",
                  1500,
                  "Programador JavaScript ",
                  1500
                ]}
                loop={Infinity}
              />
            </DescriptionText>
            <DescriptionText secondary>
              <Typical
                steps={[
                  "React-Js ",
                  4000,
                  "Node-Js ",
                  4000,
                  "Sql-Lite ",
                  2500,
                  "MySql ",

                  2500,
                  "MongoDb ",
                  2500
                ]}
                loop={Infinity}
              />
            </DescriptionText>
          </Container>
        </Description>
      </HEADER>
    </>
  );
}
