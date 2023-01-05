import { useNavigationObserver } from "../../hooks/useNavigationObserver";
import { ParallaxImage } from "../atoms/ParallaxImage";
import SectionContent from "../organisms/SectionContent";
import Parallax from "../organisms/Parallax";
import { ParallaxText } from "../atoms/ParallaxText";

const sectionData = { sectionName: "skiing", sectionId: "skiingSection" };

const Skiing = () => {
  const skiingRef = useNavigationObserver(sectionData);

  return (
    <section ref={skiingRef} id={sectionData.sectionId}>
      <Parallax>
        <ParallaxText>let's go</ParallaxText>
        <ParallaxImage order={2} src="./skiing/skier.png" />
        <ParallaxImage order={1} src="./skiing/background.png" />
      </Parallax>
      <SectionContent
        header={sectionData.sectionName}
        images={["./skiing/background.png", "./skiing/background.png"]}
      />
    </section>
  );
};

export default Skiing;
