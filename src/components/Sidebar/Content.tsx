import React from "react";
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
      <MenuEntry name="Home" icon={Home} selected={true} />
      <MenuEntry name="About" icon={About} selected={false} />
      <MenuEntry name="Report" icon={Report} selected={false} />
    </>
  );
};

export default Content;
