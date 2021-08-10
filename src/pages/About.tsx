import React from "react";
import { Flex, Box } from "@chakra-ui/react";

// Local Components
import { About } from "../components/About";
const AboutPage = () => {
  return (
    <Flex direction="column" w="770px" gridGap={4} p={[4, 4, 4, 0]}>
      <Box bgColor="white" px={4} py={8} borderRadius={12}>
        <Flex direction={["column", "column", "row", "row"]} gridGap={4}>
          <Box minW={["full", "full", "240px", "240px"]}>
            <About />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AboutPage;
