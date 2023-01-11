import useLazyLoadingObserver from "../../hooks/useLazyLoadingObserver";
import styled from "styled-components";
import { SectionHeader } from "../atoms/SectionHeader";
import Paragraph from "../atoms/Paragraph";

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  min-height: 150vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 40px;

  @media (max-width: 1024px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    gap: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SectionContent = ({ header, images }) => {
  const [ref, isVisible] = useLazyLoadingObserver();

  return (
    <StyledWrapper ref={ref}>
      {isVisible && (
        <>
          <SectionHeader>{header}</SectionHeader>
          <Image src={images[0]} style={{ gridColumn: "1/2", gridRow: "2/5" }} />
          <Paragraph style={{ gridColumn: "2/3", gridRow: "2/4" }} />
          <Image src={images[1]} style={{ gridColumn: "2/3", gridRow: "4/6" }} />
          <Paragraph style={{ gridColumn: "1/3", gridRow: "6/7" }} />
        </>
      )}
    </StyledWrapper>
  );
};

export default SectionContent;
