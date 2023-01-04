import Parallax from "../templates/Parallax";
import ParallaxContent from "../organisms/ParallaxContent";
import { useNavigationObserver } from "../hooks/useNavigationObserver";

const sectionData = { sectionName: "relax", sectionId: "relaxSection" };

const Relax = () => {
  const relaxRef = useNavigationObserver(sectionData);

  return (
    <section ref={relaxRef} id={sectionData.sectionId}>
      <Parallax></Parallax>
      <ParallaxContent></ParallaxContent>
    </section>
  );
};

export default Relax;
