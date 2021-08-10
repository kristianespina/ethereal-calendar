import React from "react";
import { Flex, Box, Button, Spacer } from "@chakra-ui/react";

import { DatePicker, TextInput } from "../Input";
import { log } from "util";
import DateInput from "../Input/DateInput";

type Props = {
  showHeaders?: boolean;
  actionCaption: string;
  showDeleteButton?: boolean;
};

const AppointmentView: React.FC<Props> = ({
  showHeaders,
  actionCaption,
  showDeleteButton,
}) => {
  const display = showHeaders ? "flex" : "none";
  return (
    <Flex direction="column" w="full" gridGap={4}>
      {/* Title */}
      <Flex direction="row" w="full" display={display}>
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
      <TextInput label="Title" placeholder="Enter appointment title" />

      <DateInput
        label="Date"
        placeholder="Select schedule date"
        onChange={(d) => {
          console.log(d);
        }}
        selectedDate={new Date()}
      />
      <TextInput label="Status" placeholder="Enter status" />
      <Flex direction="row" mt={4}>
        {showDeleteButton && <Button>Delete</Button>}
        <Spacer />
        <Button colorScheme="green">{actionCaption}</Button>
      </Flex>
    </Flex>
  );
};

export default AppointmentView;
