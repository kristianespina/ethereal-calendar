import React from "react";
import { Flex, Text, Spacer } from "@chakra-ui/react";

// Constants
import { Status } from "../../constants/enums";
import StatusBadge from "./StatusBadge";

type Props = {
  title: string;
  date: string;
  status: Status;
};

const AppointmentEntry = ({ title, date, status }: Props) => {
  return (
    <Flex
      direction="column"
      w="full"
      bgColor="white"
      p={4}
      borderRadius={12}
      _hover={{ cursor: "pointer", bgColor: "gray.50" }}
    >
      <Text fontSize={14} fontWeight="bold">
        {title}
      </Text>
      <Flex direction="row">
        <Text fontSize={10} fontWeight="bold" color="gray.500">
          {date}
        </Text>
        <Spacer />
        <StatusBadge status={status} />
      </Flex>
    </Flex>
  );
};

export default AppointmentEntry;
