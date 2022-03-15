/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { getPlayTime } from "@/utility/helpers";
import { GameContext } from "@/store/Game.context";
import { BOARD_ROWS, FAIL_MESSAGE, SUCCESS_MESSAGE } from "@/utility/constants";

export function Counter(props) {
  const { isSuccess } = props;
  const [value, _]: any = useContext(GameContext);
  const [playTime, setPlayTime] = useState(0);
  const { activeBoardIndex } = value;

  const text = isSuccess ?
    SUCCESS_MESSAGE(activeBoardIndex, playTime) : FAIL_MESSAGE(activeBoardIndex, playTime);

  useEffect(() => {
    setPlayTime(getPlayTime(value.startTime))
  }, [value.isSuccess]);

  return (
    <Stack flex={1} alignItems={"center"}>
      <Text
        fontSize="4xl">
        🕟
      </Text>
      <Text
        fontSize="19px"
        color="gray.100"
        textAlign="center">
        {text}
      </Text>
    </Stack>
  )
}

export default Counter;