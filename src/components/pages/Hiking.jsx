import { useNavigationObserver } from "../../hooks/useNavigationObserver";
import ParallaxImage from "../atoms/ParallaxImage";
import Parallax from "../organisms/Parallax";
import SectionContent from "../organisms/SectionContent";

const sectionData = { sectionName: "hiking", sectionId: "hikingSection" };

const Hiking = () => {
  const hikingRef = useNavigationObserver(sectionData);

  return (
    <section ref={hikingRef} id={sectionData.sectionId} style={{ scrollMargin: "80px" }}>
      <SectionContent header={sectionData.sectionName} images={["./hiking/section-1.jpg", "./hiking/section-2.jpg"]} />
      <Parallax>
        <ParallaxImage horizontal={true} order={8} src="./hiking/mountain.png" />
        <ParallaxImage order={-2} src="./hiking/background.jpg" />
      </Parallax>
    </section>
  );
};

export default Hiking;
