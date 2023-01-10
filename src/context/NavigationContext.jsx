import React, { useState } from "react";

export const NavigationContext = React.createContext();

const NavigationProvider = ({ children }) => {
  const [activeNavLink, setActiveNavLink] = useState("");
  const [loadedSections, setLoadedSections] = useState([]);

  const value = {
    activeNavLink,
    loadedSections,
    setActiveNavLink,
    setLoadedSections,
  };

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
