// @ts-nocheck
import 'intro.js/introjs.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { GameProvider } from '@/providers/Game.Provider';
import { INITIAL_STATE as GAME_INITIAL_STATE } from '@/store/Game.context';
import { TOUR_STEPS } from '@/utility/constants';
import { TourProvider } from '@reactour/tour';

function SecretCode({ Component, pageProps }: AppProps) {
  const [gameContext, setGameContext] = useState(GAME_INITIAL_STATE);

  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: process.env.NEXT_PUBLIC_ONESIGNAL_ID,
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);


  const updateContext = (newValue: object) => {
    setGameContext(prev => ({ ...prev, ...newValue }))
  }

  const theme = extendTheme({
    styles: {
      global: {
        'html,body': {
          padding: 0,
          margin: 0,
          backgroundColor: "#192a56",
          backgroundImage: "radial-gradient(#33436c 0.5px, #192a56 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px"
        },
        '*': {
          boxSizing: "border-box",
          outline: "none"
        }
      }
    },
    fonts: {
      heading: 'Nunito, sans-serif',
      body: 'Nunito, sans-serif',
    }
  });

  const tourStyles = {
  }

  return (
    <ChakraProvider theme={theme}>
      <GameProvider value={gameContext} setValue={updateContext}>
        <TourProvider
          showBadge={false}
          styles={tourStyles}
          steps={TOUR_STEPS}>
          <Component {...pageProps} />
        </TourProvider>
      </GameProvider>
      {/* <TourProvider tour={tourContext} setTour={setTourContext}> */}
      {/* <TourProvider steps={TOUR_STEPS}> */}
    </ChakraProvider>
  )
}

export default SecretCode;
