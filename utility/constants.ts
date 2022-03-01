export const BOARD_SIZE = 4;
export const BOARD_ROWS = 8;

export const SUCCESS_MESSAGE = (count: number, playTime: number) => `You found the code in ${count} tries and ${playTime} seconds`;
export const FAIL_MESSAGE = (count: number, playTime: number) => `You couldn't find the code in ${count} tries and ${playTime} seconds`;