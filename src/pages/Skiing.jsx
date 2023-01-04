import Parallax from "../templates/Parallax";
import ParallaxContent from "../organisms/ParallaxContent";
import { useNavigationObserver } from "../hooks/useNavigationObserver";

const sectionData = { sectionName: "skiing", sectionId: "skiingSection" };

const Skiing = () => {
  const skiingRef = useNavigationObserver(sectionData);

  return (
    <section ref={skiingRef} id={sectionData.sectionId}>
      <Parallax></Parallax>
      <ParallaxContent></ParallaxContent>
    </section>
  );
};

export default Skiing;
