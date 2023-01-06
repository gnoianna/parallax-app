import Parallax from "../organisms/Parallax";
import ParallaxImage from "../atoms/ParallaxImage";
import ParallaxText from "../atoms/ParallaxText";

const Hero = () => {
  return (
    <Parallax>
      <ParallaxText order={1}>let's go!</ParallaxText>
      <ParallaxImage order={8} src="./hero/skier.png" />
      <ParallaxImage order={-2} src="./hero/background.png" />
    </Parallax>
  );
};

export default Hero;
