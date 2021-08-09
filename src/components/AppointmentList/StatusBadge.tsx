import React from "react";
import { Box } from "@chakra-ui/react";
// Constants
import { Status } from "../../constants/enums";

type Props = {
  status: Status;
};
const { DROPPED, PENDING, ONGOING, DONE } = Status;
const COLORS = {
  [DROPPED]: { color: "red.500", bgColor: "red.200" },
  [PENDING]: { color: "gray.500", bgColor: "gray.200" },
  [ONGOING]: { color: "blue.500", bgColor: "blue.200" },
  [DONE]: { color: "green.500", bgColor: "green.200" },
};

const StatusBadge = ({ status }: Props) => {
  return (
    <Box
      bgColor={COLORS[status].bgColor}
      color={COLORS[status].color}
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
