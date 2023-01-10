import { useNavigationObserver } from "../../hooks/useNavigationObserver";
import Parallax from "../organisms/Parallax";
import ParallaxImage from "../atoms/ParallaxImage";
import SectionContent from "../organisms/SectionContent";

const sectionData = { sectionName: "relax", sectionId: "relaxSection" };

const Relax = () => {
  const relaxRef = useNavigationObserver(sectionData);

  return (
    <section ref={relaxRef} id={sectionData.sectionId} style={{ scrollMargin: "80px" }}>
      <SectionContent header={sectionData.sectionName} images={["./relax/section-1.jpg", "./relax/section-2.jpg"]} />
      <Parallax>
        <ParallaxImage order={8} src="./relax/cottage.png" />
        <ParallaxImage order={-2} src="./relax/background.jpg" />
      </Parallax>
    </section>
  );
};

export default Relax;
