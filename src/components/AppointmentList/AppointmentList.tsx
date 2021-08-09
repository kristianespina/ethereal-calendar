import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import AppointmentEntry from "./AppointmentEntry";
// Constants
import { Status } from "../../constants/enums";

const Appointment = () => {
  return (
    <Flex direction="row" gridGap={4} w="full">
      {/* <Image src={Bunny} aria-label="Bunny" /> */}
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="left"
        alignContent="center"
        w="full"
      >
        <Text fontSize={18} fontWeight="bold" mb={4} ml={3}>
          Appointments
        </Text>
        <Flex direction="column" gridGap={4}>
          <AppointmentEntry
            title="Meeting A"
            date="January 01, 2021"
            status={Status.PENDING}
          />
          <AppointmentEntry
            title="Meeting A"
            date="January 01, 2021"
            status={Status.DROPPED}
          />
          <AppointmentEntry
            title="Meeting A"
            date="January 01, 2021"
            status={Status.ONGOING}
          />
          <AppointmentEntry
            title="Meeting A"
            date="January 01, 2021"
            status={Status.DONE}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Appointment;
