import { useNavigationObserver } from "../../hooks/useNavigationObserver";
import ParallaxImage from "../atoms/ParallaxImage";
import Parallax from "../organisms/Parallax";
import SectionContent from "../organisms/SectionContent";

const sectionData = { sectionName: "hiking", sectionId: "hikingSection" };

const Hiking = () => {
  const hikingRef = useNavigationObserver(sectionData);

  return (
    <section ref={hikingRef} id={sectionData.sectionId} style={{ scrollMargin: "80px" }}>
      <SectionContent
        header={sectionData.sectionName}
        images={["./skiing/background.png", "./skiing/background.png"]}
      />
      <Parallax>
        <ParallaxImage order={8} src="./hiking/people.png" />
        <ParallaxImage order={-2} src="./hiking/background.png" />
      </Parallax>
    </section>
  );
};

export default Hiking;
