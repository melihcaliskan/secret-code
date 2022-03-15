export const localUrl = "http://localhost:3000/"
export const prodUrl = "https://secret-code-omega.vercel.app/";

export const BOARD_SIZE = 4;
export const BOARD_ROWS = 8;

export const SUCCESS_MESSAGE = (count: number, playTime: number) => `You found the code in ${count} attempt${count > 1 ? `s`: ``} and ${playTime} seconds`;
export const FAIL_MESSAGE = (count: number, playTime: number) => `You couldn't find the code in attempt${count > 1 ? `s` : ``} and ${playTime} seconds`;