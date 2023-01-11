import styled from "styled-components";
import { Header } from "../atoms/Header";
import Button from "../atoms/Button";
import { ORANGE_COLOR } from "../../constants";

const OuterWrapper = styled.footer`
  position: relative;
  width: 100%;

  ::before {
    width: 100%;
    height: 238px;
    position: absolute;
    top: 2px;
    left: 0;
    display: block;
    content: "";
    background-image: url("./footer/shape.svg");
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateY(-100%);
    z-index: 1000;
  }
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: center;
  gap: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Description = styled.h3`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Icon = styled.img`
  width: 30px;
  padding: 0px 15px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <FlexDiv column>
          <Header footer>come with us!</Header>
          <Description>let's gain new experience together.</Description>
          <Button text={"Register"} color={ORANGE_COLOR} />
        </FlexDiv>
        <FlexDiv>
          <p>follow us</p>
          <div>
            <Icon src="./footer/instagram.svg" />
            <Icon src="./footer/facebook.svg" />
            <Icon src="./footer/twitter.svg" />
          </div>
          <p style={{ marginLeft: "auto" }}>all rights reserved | 2023</p>
        </FlexDiv>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Footer;
