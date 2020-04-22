import styled from "styled-components";
import headerImg from "../../assets/header1.jpg";

export const Container = styled.div`
  padding: 0 2%;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  max-width: 1400px;
`;

export const HEADER = styled.header`
  background-image: url(${headerImg});
  width: 100%;
  background-attachment: fixed;
  max-width: 1920px;
  height: 700px;
  position: relative;
`;

export const Nav = styled.nav`
  color: white;
  padding-top: 40px;
`;
export const Description = styled.section``;
export const Ul = styled.ul`
  display: flex;
  padding: 40px;
  list-style-type: none;
`;

export const Li = styled.li`
  padding: 0 30px;
`;
export const A = styled.a`
  text-decoration: none;
  color: white;
  font-size: 25px;
`;
export const TitleText = styled.h1`
  font-weight: bold;
  font-size: 80px;
  line-height: 100px;
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #666;
  color: #fff;
`;
export const DescriptionText = styled.h1`
  padding-top: 4%;
  color: ${props => (props.secondary ? "white" : "#0779e4")};

  font-style: normal;
  font-weight: bold;
  font-size: ${props => (props.secondary ? "36px" : "30px")};
  line-height: 35px;
`;

export const Logo = styled.div`
  min-width: 60%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 180px;
`;
