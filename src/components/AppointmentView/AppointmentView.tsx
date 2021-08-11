import React, { useState, useEffect } from "react";
import { Flex, Box, Button, Spacer, useToast } from "@chakra-ui/react";
// Components
import { TextInput, DateInput } from "../Input";
// Hooks
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  add,
  edit,
  clearSelected,
  removeById,
} from "../../features/schedule/scheduleSlice";
import SelectInput from "../Input/SelectInput";
// API
import { editSchedule, addSchedule, deleteSchedule } from "../../api/schedule";
import { Schedule } from "../../types/schedule";
import { Status } from "../../constants/enums";
type Props = {
  isUpdate?: boolean;
  onClose?: () => void;
};

const AppointmentView: React.FC<Props> = ({ isUpdate, onClose }) => {
  const [title, setTitle] = useState<string>();
  const [date, setDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<Status | string>();
  const toast = useToast();
  const { selected } = useAppSelector((state) => state.schedule);

  const display = isUpdate ? "flex" : "none";
  const actionCaption = isUpdate ? "Update" : "Create";
  const dispatch = useAppDispatch();

  // Handlers
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeDate = (d: Date) => {
    setDate(new Date(d));
  };
  const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    // Update view
    try {
      setTitle(selected?.name ?? "");
      selected?.date && setDate(new Date(selected.date));
      setStatus(selected?.status);
    } catch (e) {
      console.error(e);
    }
  }, [selected]);

  // Reusable function
  const showSuccess = (message: String) => {
    toast({
      title: "Successful",
      description: message,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  const showError = (message: String) => {
    toast({
      title: "Failed",
      description: message,
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  // Handlers
  const handleSubmit = async () => {
    // Action: Update
    if (isUpdate) {
      if (selected) {
        const data: Schedule = {
          ...selected,
          name: title || "",
          status: status,
          date: date,
        };
        const response = await editSchedule(data);
        if (response.status === 200) {
          // Update store
          onClose && onClose();
          dispatch(edit(response.data));
          showSuccess("Successfully edited the schedule");
        } else {
          showError("Cannot edit schedule");
        }
      } else {
        showError("Please select a schedule first");
      }
    }

    // Action: Create
    if (!isUpdate) {
      const data: Partial<Schedule> = {
        name: title ?? "",
        status: status,
        date: date,
      };
      const response = await addSchedule(data);
      if (response.status === 201) {
        // Update store
        onClose && onClose();
        dispatch(add(response.data));
        showSuccess("Successfully created schedule");
      } else {
        showError("Cannot create schedule");
      }
    }
  };
  const handleDelete = async () => {
    const response = selected && (await deleteSchedule(selected));
    if (response?.status === 200) {
      selected && dispatch(removeById(selected.id));
      showSuccess("Successfully deleted schedule");
      dispatch(clearSelected());
    } else {
      showError("Cannot delete schedule");
    }
  };
  const handleBack = async () => {
    dispatch(clearSelected());
    onClose && onClose();
  };
  return (
    <Flex direction="column" w="full" gridGap={4} justifyContent="center">
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
          display={display}
          onClick={handleBack}
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
          {isUpdate ? "Update" : "Create appointment"}
        </Box>
      </Flex>
      {/* Contents */}

      <form onSubmit={handleSubmit}>
        <Flex direction="column" gridGap={4}>
          <TextInput
            label="Title"
            placeholder="Enter appointment title"
            value={title}
            onChange={onChangeTitle}
          />
          <DateInput
            label="Date"
            placeholder="Select schedule date"
            value={date}
            onChange={onChangeDate}
          />
          <SelectInput
            label="Status"
            placeholder="Choose status"
            value={String(status)}
            onChange={onChangeStatus}
          />
          <Flex direction="row" mt={4}>
            {isUpdate && <Button onClick={handleDelete}>Delete</Button>}
            <Spacer />
            <Button type="submit" colorScheme="green">
              {actionCaption}
            </Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};

export default AppointmentView;
