import { useContext } from 'react';
import { Button, Heading, Flex, Box } from '@chakra-ui/react'
import { GameContext, INITIAL_STATE } from 'store/Game.context';
import Counter from 'components/Counter/Counter.component';

export function SuccessModal() {
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

      <Button
        mt={36}
        isFullWidth
        height={14}
        onClick={restartGame}>
        Restart Game
      </Button>
    </Box>
  )
}

export default SuccessModal;