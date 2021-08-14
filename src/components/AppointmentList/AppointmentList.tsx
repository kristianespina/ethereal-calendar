import React, { useEffect } from "react";
import {
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

// Hooks
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { select, updateSchedule } from "../../features/schedule/scheduleSlice";

// Local Components
import AppointmentEntry from "./AppointmentEntry";
import { AppointmentView } from "../AppointmentView";
import { DialogBox } from "../DialogBox";

// API
import { getSchedule } from "../../api/schedule";

const Appointment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const variant = useBreakpointValue({ base: "mobile", md: "md" });
  const { list, filter } = useAppSelector((state) => state.schedule);
  const dispatch = useAppDispatch();

  // Handlers
  const onClick = (id: number) => {
    dispatch(select(id));

    // Create Modal if mobile
    if (variant === "mobile") onOpen();
  };

  // Mount
  useEffect(() => {
    const fetchSchedule = async () => {
      const { status, data } = await getSchedule(filter);
      if (status === 200) {
        dispatch(updateSchedule(data));
      }
    };
    fetchSchedule();
    //eslint-disable-next-line
  }, [filter]);

  return (
    <>
      <Flex direction="row" gridGap={4} w="full">
        {/* <Image src={Bunny} aria-label="Bunny" /> */}
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="left"
          alignContent="center"
          w="full"
        >
          <Flex direction="row">
            <Text
              fontSize={18}
              fontWeight="bold"
              mb={4}
              ml={3}
              color="gray.600"
            >
              Appointments
            </Text>
          </Flex>
          <Flex
            direction="column"
            gridGap={4}
            overflowY="hidden"
            maxH={["auto", "auto", "350px", "350px"]}
            _hover={{
              overflowY: "auto",
            }}
          >
            {list.map((entry) => (
              <AppointmentEntry
                key={entry.id}
                title={entry.name}
                date={entry.date}
                status={entry.status}
                onClick={() => onClick(entry.id)}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
      <DialogBox
        isOpen={isOpen}
        onClose={onClose}
        component={<AppointmentView isUpdate={true} onClose={onClose} />}
      />
    </>
  );
};

export default Appointment;
