import { useRef, useEffect } from "react";

const useBlurEffect = () => {
  const ref = useRef(null);

  const callbackFunction = ([entry]) => {
    if (entry.isIntersecting) {
      ref.current.classList.remove("blur");
    } else {
      ref.current.classList.add("blur");
    }
  };
  const observer = new IntersectionObserver(callbackFunction, {
    rootMargin: "-80px 0px 0px 0px",
    threshold: 0.6,
  });

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return ref;
};

export default useBlurEffect;
