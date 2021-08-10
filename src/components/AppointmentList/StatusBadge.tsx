import React from "react";
import { Box } from "@chakra-ui/react";
// Constants
import { Status } from "../../constants/enums";

type Props = {
  status: Status;
};

const getColor = (status: Status) => {
  switch (status as any) {
    case "dropped":
      return { color: "red.500", bgColor: "red.200" };
    case "pending":
      return { color: "gray.500", bgColor: "gray.200" };
    case "ongoing":
      return { color: "blue.500", bgColor: "blue.200" };
    case "done":
      return { color: "green.500", bgColor: "green.200" };
  }
};

const StatusBadge = ({ status }: Props) => {
  return (
    <Box
      bgColor={getColor(status)?.bgColor}
      color={getColor(status)?.color}
      px={3}
      py={0.25}
      borderRadius={16}
      fontSize={12}
      fontWeight="bold"
      textTransform="capitalize"
    >
      {status}
    </Box>
  );
};

export default StatusBadge;
