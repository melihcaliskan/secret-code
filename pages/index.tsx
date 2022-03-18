/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Box, Container } from '@chakra-ui/react'

import Board from '@/components/Board/Board.component';
import Header from '@/components/Header/Header.component'
import HowToPlay from '@/components/HowToPlay/HowToPlay.component';
import Input from '@/components/Input/Input.component'
import { GameEnd } from '@/components/GameEnd/GameEnd.component';
import { BOARD_ROWS, BOARD_SIZE, localUrl, prodUrl } from '@/utility/constants';
import { IHome } from '@/interfaces/IHome.interface';
import { GameContext } from '@/store/Game.context';
import { getUUID, isDev } from '@/utility/helpers';
import styles from "styles/Board.module.scss";
import useStorage from '@/utility/useStorage';

export function Home(props: IHome.IHomeProps) {
  const { getItem, setItem } = useStorage();
  const [value, setValue]: any = useContext(GameContext);
  const { activeBoardIndex, inputs, isStarted, isSuccess, isOver, selectedPin } = value;

  useEffect(() => {
    // Set day and board to context.
    setValue(props);
    handleSession();
  }, []);

  function handleSession() {
    const storageUUID = getItem("uuid", "local");
    if (!storageUUID) {
      setItem("uuid", getUUID(), "local");
    }

    // console.log("Storage UUID:", storageUUID);
  }

  function handleFirstInput() {
    // First input, record date.
    setValue({
      startTime: new Date().getTime()
    })
  }

  function setInput(color: string) {
    // Add new color to inputs.
    setValue({
      inputs: [
        ...value.inputs,
        color
      ]
    });
  }

  function updateInput(color: string) {
    // Update existing column.
    let tempInputs = [...inputs];
    let selected = tempInputs[BOARD_SIZE * selectedPin.row + selectedPin.column];

    if (!selected) {
      tempInputs[BOARD_SIZE * selectedPin.row + selectedPin.column] = color;
      setValue({
        inputs: tempInputs,
        selectedPin: undefined
      });
    }
  }


  function onInput(color: string) {
    if (inputs.length === 0) {
      handleFirstInput();
    }

    if (selectedPin) {
      updateInput(color);
      return;
    } else {
      setInput(color);
    }


    if (inputs.length > 0 && inputs.length % BOARD_SIZE === BOARD_SIZE - 1) {
      const nextBoard = activeBoardIndex + 1;

      if (BOARD_ROWS === nextBoard) {
        // Wait for flip animation.
        setTimeout(() => {
          setValue({
            isOver: true,
          });
        }, 1500);
      }

      if (BOARD_ROWS > nextBoard) {
        setValue({
          activeBoardIndex: activeBoardIndex + 1
        });
      }
    }
  }

  function renderContent() {
    if (!isStarted) {
      return (
        <HowToPlay />
      )
    }

    if (isSuccess) {
      return (
        <GameEnd isSuccess={true} />
      )
    }

    if (isOver) {
      return (
        <GameEnd isSuccess={false} />
      )
    }

    if (isStarted) {
      return (
        <Board />
      )
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
        className={styles.boardContainer}>
        {renderContent()}
      </Box>

      <Input onClick={onInput} />
      {isDev() && <p>{JSON.stringify(value)}</p>}
    </Container>
  )
}


export async function getServerSideProps() {
  const isProd = process.env.NODE_ENV === "production";
  const API_URL = isProd ? prodUrl : localUrl;

  const data = await fetch(API_URL + "api/secret/").then(res => res.json());
  const { day, board } = data;

  return {
    props: {
      day,
      board,
    },
  }
}

export default Home;