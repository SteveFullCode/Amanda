import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <a href={href} title={title} className="nav-link">
      {title}
    </a>
  );
};

export default NavLink;
