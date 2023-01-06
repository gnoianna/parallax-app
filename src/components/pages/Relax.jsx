import { useNavigationObserver } from "../../hooks/useNavigationObserver";
import Parallax from "../organisms/Parallax";
import SectionContent from "../organisms/SectionContent";

const sectionData = { sectionName: "relax", sectionId: "relaxSection" };

const Relax = () => {
  const relaxRef = useNavigationObserver(sectionData);

  return (
    <section ref={relaxRef} id={sectionData.sectionId}>
      <Parallax></Parallax>
      <SectionContent></SectionContent>
    </section>
  );
};

export default Relax;
