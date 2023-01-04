import { useNavigationObserver } from "../hooks/useNavigationObserver";
import ParallaxContent from "../organisms/ParallaxContent";
import Parallax from "../templates/Parallax";

const sectionData = { sectionName: "hiking", sectionId: "hikingSection" };

const Hiking = () => {
  const hikingRef = useNavigationObserver(sectionData);

  return (
    <section ref={hikingRef} id={sectionData.sectionId}>
      <Parallax></Parallax>
      <ParallaxContent></ParallaxContent>
    </section>
  );
};

export default Hiking;
