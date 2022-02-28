import Image from "next/image";
import { useContext } from "react";
import { Box, Button, Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, TimeIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { GameContext } from "@/store/Game.context";

const steps = [
  {
    text: "First row: No match.",
    color: "red.500",
    icon: NotAllowedIcon
  },
  {
    text: "Second row: 1st, 2nd, and 4th columns are matched.",
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
  const [value, setValue] = useContext(GameContext);

  function startGame() {
    setValue({
      isStarted: true
    });
  }

  // TODO: jpg.
  // TODO: transparent.
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}>

      <Heading style={{ fontSize: 24, color: "rgba(255,255,255,0.8)" }}>
        How To Play
      </Heading>

      <Image
        src="/how-to.png"
        alt="How to play"
        width={480}
        height={256}
        objectFit="contain"
      />

      <List spacing={3} mt={6} mb={12}>
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
          onClick={startGame}>
          Start Game
        </Button>
      </Box>
    </Flex>
  )
}

export default HowToPlay;