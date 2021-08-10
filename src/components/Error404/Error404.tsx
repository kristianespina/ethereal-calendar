import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import Rocket from "../../assets/rocket.svg";
const Error404 = () => {
  return (
    <Flex
      direction="column"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      w="full"
    >
      <Image src={Rocket} maxW={300} />
      <Text fontWeight="bold" fontSize={18}>
        Nothing to see here
      </Text>
      <Text fontWeight="regular" fontSize={12} color="gray.500">
        Select an appointment to continue
      </Text>
    </Flex>
  );
};

export default Error404;
