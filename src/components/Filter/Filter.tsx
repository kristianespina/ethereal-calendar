import React, { useState } from "react";
import { Flex, Box, Button, Spacer } from "@chakra-ui/react";
// Components
import { SelectInput } from "../Input";
// Hooks
import { useAppDispatch } from "../../app/hooks";
import { setFilter } from "../../features/schedule/scheduleSlice";
import { Status } from "../../constants/enums";
type Props = {
  isUpdate?: boolean;
  onClose?: () => void;
};

const Filter: React.FC<Props> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<Status | string>();
  const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  // Handlers
  const handleSubmit = () => {
    if (status !== "") {
      dispatch(setFilter(`?status=${status}`));
      onClose && onClose();
    }
  };
  const clearFilter = () => {
    dispatch(setFilter(""));
    onClose && onClose();
  };
  return (
    <Flex direction="column" w="full" gridGap={4} justifyContent="center">
      {/* Title */}
      <Flex direction="row" w="full">
        <Box
          flexGrow={1}
          textAlign="center"
          fontSize={18}
          fontWeight="bold"
          color="gray.800"
        >
          Filter
        </Box>
      </Flex>
      {/* Contents */}

      <form onSubmit={handleSubmit}>
        <Flex direction="column" gridGap={4}>
          <SelectInput
            label="Status"
            placeholder="Choose status"
            value={String(status)}
            onChange={onChangeStatus}
          />
          <Flex direction="row" mt={4}>
            <Button onClick={clearFilter} colorScheme="green" variant="link">
              Clear Filter
            </Button>
            <Spacer />
            <Button type="submit" colorScheme="green">
              Filter
            </Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};

export default Filter;
