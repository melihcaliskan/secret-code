import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import Pin from "components/Pin/Pin.component";
import styles from "styles/Input.module.scss"
import { PinColor } from "@/enums/PinColor.enum";
import { enumToArray } from "@/utility/helpers";
import { useContext } from 'react';
import { GameContext } from '@/store/Game.context';
import Twemoji from '@/components/Twemoji/Twemoji.component';

export function Input(props) {
  const [value, setValue]: any = useContext(GameContext);
  const { isStarted, isOver, isSuccess, selectedPin } = value;
  const { onClick } = props;
  const hideCover = isStarted && (isStarted && !isSuccess) && (isStarted && !isOver);

  function renderInputs() {
    return (
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
    )
  }

  function renderTrash() {
    return (
      <Box mt={6}>
        <Twemoji
          emoji="🗑"
          size={36} />
      </Box>
    )
  }

  return (
    <Box
      className={styles.input}>

      <Box
        className={`${styles.inputCover} ${hideCover ? styles.coverHidden : ""}`} />

      {renderInputs()}
      {selectedPin && renderTrash()}
    </Box>
  )
}

export default Input;