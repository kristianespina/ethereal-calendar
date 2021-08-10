import React, { useEffect } from "react";
import moment from "moment";
import { Flex, Text, Spacer } from "@chakra-ui/react";

// Constants
import { Status } from "../../constants/enums";
import StatusBadge from "./StatusBadge";

type Props = {
  title: string;
  date: Date;
  status: Status;
  onClick: () => void;
};

const AppointmentEntry = ({ title, date, status, onClick }: Props) => {
  return (
    <Flex
      direction="column"
      w="full"
      bgColor="white"
      p={4}
      borderRadius={12}
      _hover={{ cursor: "pointer", bgColor: "gray.50" }}
      onClick={onClick}
    >
      <Text fontSize={14} fontWeight="bold">
        {title}
      </Text>
      <Flex direction="row">
        <Text fontSize={10} fontWeight="bold" color="gray.500">
          {moment(date).format("MMM DD, YYYY")}
        </Text>
        <Spacer />
        <StatusBadge status={status} />
      </Flex>
    </Flex>
  );
};

export default AppointmentEntry;
