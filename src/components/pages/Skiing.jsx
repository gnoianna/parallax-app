import { useNavigationObserver } from "../../hooks/useNavigationObserver";
import ParallaxImage from "../atoms/ParallaxImage";
import SectionContent from "../organisms/SectionContent";
import Parallax from "../organisms/Parallax";
import ParallaxText from "../atoms/ParallaxText";

const sectionData = { sectionName: "skiing", sectionId: "skiingSection" };

const Skiing = () => {
  const skiingRef = useNavigationObserver(sectionData);

  return (
    <section ref={skiingRef} id={sectionData.sectionId} style={{ scrollMargin: "80px" }}>
      <SectionContent header={sectionData.sectionName} images={["./skiing/section-1.jpg", "./skiing/section-2.jpg"]} />
      <Parallax>
        <ParallaxImage order={8} horizontal={true} src="./skiing/ski-chair.png" />
        <ParallaxImage order={-2} src="./skiing/background.jpg" />
      </Parallax>
    </section>
  );
};

export default Skiing;
