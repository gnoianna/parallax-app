import { useRef, useEffect } from "react";

const useParallaxEffect = (order, horizontal) => {
  const ref = useRef(null);

  const callbackFunction = ([entry]) => {
    if (entry.isIntersecting) {
      window.addEventListener("scroll", () => {
        if (ref.current) {
          const offsetFromPageTop = ref.current.parentElement.offsetTop;
          const newValue =
            window.scrollY >= offsetFromPageTop ? (window.scrollY - offsetFromPageTop) * (1 / Math.abs(order)) : 0;

          ref.current.style.top = newValue + "px";
          if (horizontal) ref.current.style.left = -2 * newValue + "px";
        }
      });
    }
  };
  const observer = new IntersectionObserver(callbackFunction, {});

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return ref;
};

export default useParallaxEffect;
