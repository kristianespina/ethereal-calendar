import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Appointment } from "../components/Appointment";
import { Error404 } from "../components/Error404";

const Calendar = () => {
  return (
    <Flex direction="column" w="770px" gridGap={4}>
      <Box bgColor="white" p={4} borderRadius={12}>
        <Header />
      </Box>
      <Box bgColor="white" px={4} py={8} borderRadius={12}>
        <Flex direction={["column", "column", "row", "row"]}>
          <Box minW={["full", "full", "240px", "240px"]}>
            <Appointment />
          </Box>
          <Box flexGrow={1}>
            <Error404 />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Calendar;
