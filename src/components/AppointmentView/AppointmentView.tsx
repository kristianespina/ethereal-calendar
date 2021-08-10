import React, { useState } from "react";
import { Flex, Box, Button, Spacer } from "@chakra-ui/react";
// components
import { TextInput, DateInput } from "../Input";
// hooks
import { useAppDispatch } from "../../app/hooks";
import { updateSchedule } from "../../features/schedule/scheduleSlice";
import SelectInput from "../Input/SelectInput";

type Props = {
  isUpdate?: boolean;
};

const AppointmentView: React.FC<Props> = ({ isUpdate }) => {
  const display = isUpdate ? "flex" : "none";
  const actionCaption = isUpdate ? "Update" : "Create";
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    if (isUpdate) {
      console.log("Updated");
    }
  };
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
      <form onSubmit={handleSubmit}>
        <TextInput label="Title" placeholder="Enter appointment title" />
        <DateInput
          label="Date"
          placeholder="Select schedule date"
          onChange={(d) => {
            console.log(d);
          }}
          selectedDate={new Date()}
        />
        <SelectInput label="Status" placeholder="Choose status" />
        <Flex direction="row" mt={4}>
          {isUpdate && <Button>Delete</Button>}
          <Spacer />
          <Button colorScheme="green">{actionCaption}</Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default AppointmentView;
