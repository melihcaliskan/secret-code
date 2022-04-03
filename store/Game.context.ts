import { createContext } from "react";

export const INITIAL_STATE = {
  isStarted: true,
  isSuccess: false,
  isOver: false,
  isFlipped: false,
  inputs: [],
  rowColors: [],
  inputIndex: 0,
  activeBoardIndex: 0,
  startTime: 0,
  selectedPin: undefined,
  popoverIndex: 0,
}

//export const INITIAL_STATE = { "isStarted": true, "isSuccess": false, "isOver": false, "isFlipped": false, "inputs": ["ORANGE", "WHITE", "BLACK", "BLUE", "ORANGE", "GREEN", "YELLOW", "RED", "ORANGE", "BLUE"], "rowColors": ["YELLOW", "YELLOW", null, null, "GREEN", "YELLOW", null, null], "inputIndex": 10, "activeBoardIndex": 2, "startTime": 1648940987721, "popoverIndex": 0, "day": 34, "board": ["WHITE", "ORANGE", "PURPLE", "RED"] }

export const GameContext = createContext(INITIAL_STATE);
