import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import Pin from "components/Pin/Pin.component";
import styles from "styles/Input.module.scss"
import { PinColor } from "@/enums/PinColor.enum";
import { enumToArray } from "@/utility/helpers";
import { useContext } from 'react';
import { GameContext } from '@/store/Game.context';

export function Input(props) {
  const [value, setValue]: any = useContext(GameContext);
  const { isStarted } = value;
  const { onClick } = props;

  return (
    <VStack
      className={styles.input}>

      <Box
        className={`${styles.inputCover} ${isStarted ? styles.coverHidden : ""}`} />

      <Box>
        <Text
          fontSize="2xl"
          className={styles.title}>
          PICK ONE COLOR
        </Text>

        <HStack spacing="24px">
          {enumToArray(PinColor).map((color, idx) =>
            <Pin
              key={idx}
              color={color}
              onClick={() => onClick(color)} />
          )}
        </HStack>
      </Box>
    </VStack>
  )
}

export default Input;