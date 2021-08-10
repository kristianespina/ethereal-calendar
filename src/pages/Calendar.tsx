import React from "react";
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { AppointmentList } from "../components/AppointmentList";
import { AppointmentView } from "../components/AppointmentView";
import { Error404 } from "../components/Error404";

const Calendar = () => {
  const displayVariant = useBreakpointValue({ base: "none", md: "flex" });
  return (
    <Flex direction="column" w="770px" gridGap={4} p={[4, 4, 4, 0]}>
      <Box bgColor="white" p={4} borderRadius={12}>
        <Header />
      </Box>
      <Box bgColor="white" px={4} py={8} borderRadius={12}>
        <Flex direction={["column", "column", "row", "row"]} gridGap={4}>
          <Box minW={["full", "full", "240px", "240px"]}>
            <AppointmentList />
          </Box>
          <Box flexGrow={1} display={displayVariant}>
            {/* <Error404 /> */}
            <AppointmentView
              showDeleteButton={true}
              actionCaption="Update"
              showHeaders={true}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Calendar;
