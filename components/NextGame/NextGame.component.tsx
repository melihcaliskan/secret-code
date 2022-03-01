import { useState } from "react";
import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { getTomorrow } from "@/utility/helpers";
import Countdown from "react-countdown";

export function NextGame() {
  const [tomorrow, _] = useState(getTomorrow());

  const renderer = (props: any) => {
    const { hours, minutes, seconds, onComplete } = props;

    if (onComplete) {
      location.reload();
    }

    return (
      <Text
        fontWeight="bold"
        fontSize="5xl"
        color="gray.100">
        {hours}:{minutes}:{seconds}
      </Text>
    )
  }

  return (
    <>
      <Divider style={{ borderColor: "rgba(0,0,0,0.4)" }} />
      <Stack
        mt={6}
        alignItems="center">
        <Text
          fontWeight="bold"
          fontSize="19px"
          color="gray.100">
          Next Secret Code
        </Text>
        <Countdown
          date={tomorrow}
          renderer={renderer} />
      </Stack>
    </>
  )
}

export default NextGame;