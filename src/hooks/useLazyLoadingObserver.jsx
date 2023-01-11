import { useRef, useState, useEffect } from "react";

const useLazyLoadingObserver = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
    rootMargin: "100%",
  });

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  return [ref, isVisible];
};

export default useLazyLoadingObserver;
