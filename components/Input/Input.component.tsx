import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import Pin from "components/Pin/Pin.component";
import styles from "styles/Input.module.scss"
import { PinColor } from "@/enums/PinColor.enum";
import { enumToArray } from "@/utility/helpers";
import { useContext } from 'react';
import { GameContext } from '@/store/Game.context';

export function Input(props) {
  const [value, setValue]: any = useContext(GameContext);
  const { isStarted, isOver, isSuccess } = value;
  const { onClick } = props;
  const hideCover = isStarted && (isStarted && !isSuccess) && (isStarted && !isOver);

  return (
    <VStack
      className={styles.input}>

      <Box
        className={`${styles.inputCover} ${hideCover ? styles.coverHidden : ""}`} />

      <Box>
        <Text
          fontSize="2xl"
          className={styles.title}>
          PICK ONE COLOR
        </Text>

        <HStack className={styles.inputStack}>
          {enumToArray(PinColor).map((color, idx) =>
            <Pin
              key={idx}
              color={PinColor[color]}
              size={"28.5px"}
              onClick={() => onClick(color)} />
          )}
        </HStack>
      </Box>
    </VStack>
  )
}

export default Input;