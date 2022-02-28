import { createContext } from "react";

export const INITIAL_STATE = {
  isStarted: false,
  isSuccess: false,
  isOver: false,
  isFlipped: false,
  inputs: []
}

export const GameContext = createContext(INITIAL_STATE);
