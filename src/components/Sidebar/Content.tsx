import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Text } from "@chakra-ui/react";

// Local Assets
import { faHome, faHeart, faBug } from "@fortawesome/free-solid-svg-icons";

// Local Imports
import MenuEntry from "./MenuEntry";

type Menu = {
  url: string;
  name: string;
  icon: any;
  isExternal?: boolean;
};
const Content = () => {
  const location = useLocation();
  console.log(location.pathname);

  const links: Menu[] = [
    {
      url: "/",
      name: "Home",
      icon: faHome,
    },
    {
      url: "/about",
      name: "About",
      icon: faHeart,
    },
    {
      url: "https://github.com/kristianespina/ethereal-calendar/issues",
      isExternal: true,
      name: "Report",
      icon: faBug,
    },
  ];

  const handleExternalUrl = (link: Menu) => {
    if (link.isExternal) window.location.href = link.url;
  };
  return (
    <>
      {/* App Title */}
      <Text color="blue.800" fontWeight="bold" fontSize={24} mb={4}>
        Calendar App
      </Text>

      {/* Menu */}
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.isExternal ? "/" : link.url}
          onClick={() => handleExternalUrl(link)}
        >
          <MenuEntry
            name={link.name}
            icon={link.icon}
            selected={link.url === location.pathname}
          />
        </Link>
      ))}
    </>
  );
};

export default Content;
