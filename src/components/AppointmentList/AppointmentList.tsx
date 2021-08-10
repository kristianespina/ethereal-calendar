import React, { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";

// Hooks
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { select, updateSchedule } from "../../features/schedule/scheduleSlice";

// Local Components
import AppointmentEntry from "./AppointmentEntry";

// API
import { getSchedule } from "../../api/schedule";

const Appointment = () => {
  const { list } = useAppSelector((state) => state.schedule);
  const dispatch = useAppDispatch();

  // Handlers
  const onClick = (id: number) => {
    dispatch(select(id));
  };

  // Mount
  useEffect(() => {
    const fetchSchedule = async () => {
      const { status, data } = await getSchedule();
      if (status === 200) {
        dispatch(updateSchedule(data));
      }
    };
    fetchSchedule();
    //eslint-disable-next-line
  }, []);

  return (
    <Flex direction="row" gridGap={4} w="full">
      {/* <Image src={Bunny} aria-label="Bunny" /> */}
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="left"
        alignContent="center"
        w="full"
      >
        <Text fontSize={18} fontWeight="bold" mb={4} ml={3}>
          Appointments
        </Text>
        <Flex
          direction="column"
          gridGap={4}
          overflow="scroll"
          maxH={["auto", "auto", "350px", "350px"]}
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
  );
};

export default Appointment;
