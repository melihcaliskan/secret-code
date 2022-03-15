import { useContext, useEffect } from 'react';
import { Button, Heading, Box } from '@chakra-ui/react'
import { GameContext, INITIAL_STATE } from 'store/Game.context';
import Counter from 'components/Counter/Counter.component';
import ShareButtons from 'components/ShareButtons/ShareButtons.component';
import NextGame from 'components/NextGame/NextGame.component';
import analytics from "utility/analytics";
import { Event } from "@/enums/Event.enum";
import useStorage from '@/utility/useStorage';

export function GameEnd(props) {
  const { isSuccess } = props;
  const { getItem } = useStorage();
  const [value, setValue]: any = useContext(GameContext);

  useEffect(() => {
    const uuid = getItem("uuid", "local");
    analytics.event({
      action: Event.GAME_OVER,
      params: {
        uuid,
        ...value
      }
    });
  }, []);


  function restartGame() {
    setValue(INITIAL_STATE);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={12}>
      <Heading color="gray.100">
        {isSuccess ? "Amazing! 🎉" : "Game Over 😣"}
      </Heading>

      <Box
        mt={16}
        mb={4}>
        <Counter
          isSuccess={isSuccess} />
      </Box>

      <NextGame />

      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={22}>
        <ShareButtons />
        <Button
          isFullWidth
          height={14}
          onClick={restartGame}>
          Restart Game
        </Button>
      </Box>
    </Box>
  )
}

export default GameEnd;