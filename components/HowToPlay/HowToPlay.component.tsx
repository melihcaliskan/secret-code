import Image from "next/image";
import { useContext } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { GameContext } from "@/store/Game.context";

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

      First row: No match.
      Second row: 1st, 2nd, and 4th columns are matched.
      Third row: You solved the code!

      <Button onClick={startGame}>
        Start Game
      </Button>
    </Flex>
  )
}

export default HowToPlay;