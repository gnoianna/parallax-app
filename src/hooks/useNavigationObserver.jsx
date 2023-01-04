import { useRef, useContext, useEffect, useState } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

export const useNavigationObserver = (sectionElement) => {
  const { setActiveNavLink, setLoadedSections } = useContext(NavigationContext);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const ref = useRef(null);

  const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting), {
    threshold: [0.25, 0.5, 0.75],
  });

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  });

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLink(sectionElement.sectionName);
      setLoadedSections((prev) => new Set([...prev, sectionElement]));
    }
  }, [isOnScreen, setActiveNavLink, sectionElement.sectionName]);

  return ref;
};
