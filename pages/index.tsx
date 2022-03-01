import { useContext, useEffect, useState } from 'react';
import { Box, Container } from '@chakra-ui/react'

import Board from '@/components/Board/Board.component';
import Header from '@/components/Header/Header.component'
import HowToPlay from '@/components/HowToPlay/HowToPlay.component';
import FailModal from '@/components/FailModal/FailModal.component';
import Input from '@/components/Input/Input.component'
import SuccessModal from '@/components/SuccessModal/SuccessModal.component';
import styles from "styles/Board.module.scss";
import { BOARD_ROWS, BOARD_SIZE } from '@/utility/constants';
import { IHome } from '@/interfaces/IHome.interface';
import { GameContext } from '@/store/Game.context';

export function Home(props: IHome.IHomeProps) {
  const [value, setValue]: any = useContext(GameContext);
  const { board, inputs, isStarted } = value;

  const [isSuccess, setIsSuccess] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);

  useEffect(() => {
    // Set day and board to context.
    setValue(props);
  }, []);


  function onInput(color: string) {
    setValue({
      inputs: [
        ...value.inputs,
        color
      ]
    });

    if (inputs.length > 0 && inputs.length % BOARD_SIZE === 0) {

      const nextBoard = activeBoardIndex + 1;
      if (BOARD_ROWS === nextBoard) {
        setValue({
          isFlipped: true
        });

        // Wait for flip animation.
        setTimeout(() => {
          setValue({
            isOver: true
          });
        }, 1200);
      }

      if (BOARD_ROWS > nextBoard) {
        setActiveBoardIndex(activeBoardIndex + 1);
      }
    }
  }

  return (
    <Container className={styles.gameContainer}>
      <Header />

      <Box
        zIndex={3}
        position={"relative"}
        mt={4}
        backgroundColor={"#273c75"}
        height={480}
        className={styles.boardContainer}>
        {!isStarted ?
          <HowToPlay />
          :
          <Board
            activeBoardIndex={activeBoardIndex}
            setActiveBoard={setActiveBoardIndex} />
        }
      </Box>

      <Input onClick={onInput} />

      <SuccessModal />
      <FailModal />

    </Container>
  )
}


export async function getServerSideProps() {
  const localUrl = "http://localhost:3000/"
  const prodUrl = "https://secret-code-omega.vercel.app/";

  const isProd = process.env.NODE_ENV === "production";
  const API_URL = isProd ? prodUrl : localUrl;
  const data = await fetch(API_URL + "api/secret/").then(res => res.json());
  const { day, board } = data;

  return {
    props: {
      day,
      board
    },
  }
}


{/* <Button onClick={() => setValue({ isFlipped: true })}>
        Flip
      </Button> */}

{/* {JSON.stringify(value)} */ }

export default Home;