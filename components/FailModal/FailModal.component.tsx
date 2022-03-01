import { useContext } from 'react';
import { Button, Heading, Box } from '@chakra-ui/react'
import { GameContext, INITIAL_STATE } from 'store/Game.context';
import ShareButtons from '../ShareButtons/ShareButtons.component';
import Counter from '../Counter/Counter.component';
import NextGame from '../NextGame/NextGame.component';

// Refactor yapılacak.
// Bu componente gerek yok.

export function FailModal() {
  const [value, setValue]: any = useContext(GameContext);

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
        Game Over 😣
      </Heading>

      <Box
        mt={16}
        mb={4}>
        <Counter
          isSuccess={true} />
      </Box>

      <NextGame />

      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={24}>
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

export default FailModal;