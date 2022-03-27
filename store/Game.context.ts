import { createContext } from "react";

export const INITIAL_STATE = {
  isStarted: true,
  isSuccess: false,
  isOver: false,
  isFlipped: false,
  inputs: [],
  rowColors: [],
  activeBoardIndex: 0,
  startTime: 0,
  selectedPin: undefined
}

//export const INITIAL_STATE = { "isStarted": true, "isSuccess": false, "isOver": true, "isFlipped": false, "inputs": ["GREEN", "PURPLE", "WHITE", "YELLOW"], "rowColors": ["GREEN", "GREEN", "YELLOW", null], "activeBoardIndex": 1, "startTime": 1647630335380, "day": 18, "board": ["GREEN", "PURPLE", "YELLOW", "ORANGE"] }
//export const INITIAL_STATE = { "isStarted": true, "isSuccess": true, "isOver": false, "isFlipped": false, "inputs": ["ORANGE", "ORANGE", "ORANGE", "ORANGE", "ORANGE", "ORANGE", "ORANGE", "ORANGE", "BLUE", "PURPLE", "ORANGE", "RED", "WHITE", "BLUE", "PURPLE", "GREEN", "WHITE", "BLACK", "BLUE", "RED"], "rowColors": [null, null, null, null, null, null, null, null, "YELLOW", "RED", null, null, "YELLOW", "RED", null, null, "YELLOW", "YELLOW", "YELLOW", "YELLOW"], "activeBoardIndex": 5, "startTime": 1647288799656, "day": 14, "board": ["WHITE", "BLACK", "BLUE", "RED"] }

export const GameContext = createContext(INITIAL_STATE);
