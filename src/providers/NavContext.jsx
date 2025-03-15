import React, { createContext, useState, useEffect } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (isNavExpanded) {
      document.body.classList.add("nav-expanded");
    } else {
      document.body.classList.remove("nav-expanded");
    }

    return () => document.body.classList.remove("nav-expanded");
  }, [isNavExpanded]);

  return (
    <NavContext.Provider value={{ isNavExpanded, setIsNavExpanded }}>
      {children}
    </NavContext.Provider>
  );
};
