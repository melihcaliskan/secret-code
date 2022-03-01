import { createContext } from "react";

export const INITIAL_STATE = {
  isStarted: false,
  isSuccess: false,
  isOver: false,
  isFlipped: false,
  inputs: [],
  activeBoardIndex: 0,
  startTime: 0
}

export const GameContext = createContext(INITIAL_STATE);
