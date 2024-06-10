import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

const CustomLink = ({ propsHref, propsText, children, className }) => {
  const location = useLocation();
  const { openedHeader, setHeaderOpened } = useContext(DataContext);
  const openHeaderMenu = () => {
    if (openedHeader === true) {
      setHeaderOpened(!openedHeader);
    }
  };

  return (
    <NavLink to={propsHref} onClick={openHeaderMenu} className={className}>
      {propsText ? propsText : children}
    </NavLink>
  );
};

export default CustomLink;
