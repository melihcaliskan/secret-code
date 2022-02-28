import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { GameProvider } from '@/providers/Game.Provider';
import { INITIAL_STATE } from '@/store/Game.context';
import { useState } from 'react';

function SecretCode({ Component, pageProps }: AppProps) {
  const [gameContext, setGameContext] = useState(INITIAL_STATE);

  const updateContext = (newValue: object) => {
    setGameContext(prev => ({ ...prev, ...newValue }))
  }

  const theme = extendTheme({
    fonts: {
      heading: 'Nunito, sans-serif',
      body: 'Nunito, sans-serif',
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <GameProvider value={gameContext} setValue={updateContext}>
        <Component {...pageProps} />
      </GameProvider>
    </ChakraProvider>
  )
}

export default SecretCode;
