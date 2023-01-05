import { useNavigationObserver } from "../../hooks/useNavigationObserver";
import { ParallaxImage } from "../atoms/ParallaxImage";
import SectionContent from "../organisms/SectionContent";
import Parallax from "../organisms/Parallax";

const sectionData = { sectionName: "hiking", sectionId: "hikingSection" };

const Hiking = () => {
  const hikingRef = useNavigationObserver(sectionData);

  return (
    <section ref={hikingRef} id={sectionData.sectionId}>
      <Parallax>
        <ParallaxImage order={3} src="./hiking/first-plan.png" />
        <ParallaxImage order={2} src="./hiking/cloud-2.png" />
        <ParallaxImage order={2} src="./hiking/cloud-1.png" />
        <ParallaxImage order={1} src="./hiking/background.png" />
      </Parallax>
      <SectionContent
        header={sectionData.sectionName}
        images={["./skiing/background.png", "./skiing/background.png"]}
      />
    </section>
  );
};

export default Hiking;
