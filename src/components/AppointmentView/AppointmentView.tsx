import React from "react";
import { Flex, Box, Button, Spacer } from "@chakra-ui/react";

import InputBox from "./InputBox";
const AppointmentView = () => {
  return (
    <Flex direction="column" w="full" gridGap={4}>
      {/* Title */}
      <Flex direction="row" w="full">
        <Box
          position="absolute"
          fontSize={12}
          fontWeight="bold"
          color="gray.500"
          py={1}
          _hover={{
            color: "blue.700",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Back
        </Box>
        <Box
          flexGrow={1}
          textAlign="center"
          fontSize={18}
          fontWeight="bold"
          color="gray.800"
        >
          Update
        </Box>
      </Flex>
      {/* Contents */}
      <InputBox label="Title" placeholder="Enter appointment title" />
      <InputBox label="Date" placeholder="Select appointment date" />
      <InputBox label="Status" placeholder="Enter status" />
      <Flex direction="row" mt={4}>
        <Button>Delete</Button>
        <Spacer />
        <Button colorScheme="green">Update</Button>
      </Flex>
    </Flex>
  );
};

export default AppointmentView;
