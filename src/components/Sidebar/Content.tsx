import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

// Local Assets
import Home from "../../assets/home.svg";
import About from "../../assets/about.svg";
import Report from "../../assets/report.svg";

// Local Imports
import MenuEntry from "./MenuEntry";

const Content = () => {
  return (
    <>
      {/* App Title */}
      <Text color="blue.500" fontWeight="bold" fontSize={24} mb={4}>
        Calendar App
      </Text>

      {/* Menu */}
      <Link to="/">
        <MenuEntry name="Home" icon={Home} selected={true} />
      </Link>
      <Link to="/about">
        <MenuEntry name="About" icon={About} selected={false} />
      </Link>
      <a href="https://github.com/kristianespina/ethereal-calendar/issues">
        <MenuEntry name="Report" icon={Report} selected={false} />
      </a>
    </>
  );
};

export default Content;
