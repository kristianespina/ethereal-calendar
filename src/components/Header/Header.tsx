import React from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

import Bunny from "../../assets/bunny.svg";

const Header = () => {
  return (
    <Flex direction="row" gridGap={4}>
      <Image src={Bunny} aria-label="Bunny" />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="left"
        alignContent="center"
      >
        <Text fontSize={18} fontWeight="bold" lineHeight={0.5}>
          Welcome
        </Text>
        <Text fontSize={36} fontWeight="bold">
          Kristian Espina
        </Text>
        <Button colorScheme="blue" size="sm">
          Create appointment
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
