import { useRef, useEffect } from "react";

const useParallaxEffect = (order, horizontal) => {
  const containerRef = useRef(null);

  const callbackFunction = ([entry]) => {
    if (entry.isIntersecting) {
      window.addEventListener("scroll", () => {
        if (containerRef.current) {
          const offsetFromPageTop = containerRef.current.parentElement.offsetTop;

          containerRef.current.style.top =
            window.scrollY >= offsetFromPageTop
              ? (window.scrollY - offsetFromPageTop) * (1 / Math.abs(order)) + "px"
              : "0px";

          if (horizontal) {
            containerRef.current.style.left =
              window.scrollY >= offsetFromPageTop
                ? (window.scrollY - offsetFromPageTop) * (-2 / Math.abs(order)) + "px"
                : "0px";
          }
        }
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {});
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  });

  return containerRef;
};

export default useParallaxEffect;
