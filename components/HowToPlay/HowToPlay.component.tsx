import Image from "next/image";
import { useContext } from "react";
import { Box, Button, Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, TimeIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { GameContext } from "@/store/Game.context";
import analytics from "utility/analytics";
import useStorage from "@/utility/useStorage";
import { Event } from "@/enums/Event.enum";
import styles from "styles/Home.module.scss"

const steps = [
  {
    text: "First row: No match.",
    color: "red.500",
    icon: NotAllowedIcon
  },
  {
    text: "Second row: 1st and 3rd Pins are correct, the color of the 4th pin is correct but it is in the wrong position.",
    color: "yellow.500",
    icon: TimeIcon
  },
  {
    text: "Third row: You solved the code!",
    color: "green.500",
    icon: CheckCircleIcon
  }
];

export function HowToPlay() {
  const { getItem } = useStorage();
  const [_, setValue] = useContext(GameContext);


  function startGame() {
    setValue({
      isStarted: true
    });

    const uuid = getItem("uuid", "local");
    analytics.event({
      action: Event.START_GAME,
      params: {
        uuid
      }
    });
  }

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}>

      <Heading mt={4} style={{ fontSize: 24, color: "rgba(255,255,255,0.8)" }}>
        How To Play
      </Heading>

      <Box className={styles.howToImg}>
        <Image
          src="/how-to.gif"
          alt="How to play"
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <List spacing={3} mt={6} mb={12} px={6}>
        {steps.map((step, idx) => {
          const { text, color, icon } = step;
          return (
            <ListItem
              key={idx}
              display="flex"
              alignItems="center"
              color="gray.100">
              <ListIcon as={icon} color={color} />
              {text}
            </ListItem>
          )
        })}
      </List>

      <Box
        w={"100%"}
        px={6}>
        <Button
          isFullWidth
          height={14}
          onClick={startGame}>
          Start Game
        </Button>
      </Box>
    </Flex >
  )
}

export default HowToPlay;