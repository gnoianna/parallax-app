import styled from "styled-components";
import { SectionHeader } from "../atoms/SectionHeader";
import Button from "../atoms/Button";
import { ORANGE_COLOR } from "../../constants";

const OuterWrapper = styled.footer`
  position: relative;
  width: 100%;

  ::before {
    width: 100%;
    height: 238px;
    position: absolute;
    top: 0;
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

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  gap: 30px;
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
  cursor: pointer;
`;

const Footer = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <FlexWrapper direction={"column"}>
          <SectionHeader color={ORANGE_COLOR} simple>
            come with us!
          </SectionHeader>
          <Description>let's gain new experience together.</Description>
          <Button text={"Register"} color={ORANGE_COLOR} />
        </FlexWrapper>
        <FlexWrapper>
          <p>follow us</p>
          <Icon src="./footer/instagram.svg" />
          <Icon src="./footer/facebook.svg" />
          <Icon src="./footer/twitter.svg" />
          <p style={{ marginLeft: "auto" }}>all rights reserved | 2023</p>
        </FlexWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Footer;
