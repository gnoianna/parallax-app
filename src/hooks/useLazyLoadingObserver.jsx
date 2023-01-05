import { useRef, useState, useEffect } from "react";

const useLazyLoadingObserver = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      rootMargin: "50%",
    });
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  });

  return [containerRef, isVisible];
};

export default useLazyLoadingObserver;
