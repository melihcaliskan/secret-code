export const localUrl = "http://localhost:3000/"
export const prodUrl = "https://thesecretcodegame.com/";

export const SITE_TITLE = "Secret Code";
export const SITE_DESC = "Secret Code is a fun, interactive puzzle gamethat challenges you to crack codes! To play, simply pick a pin and match the pins to find the code.";

export const BOARD_SIZE = 4;
export const BOARD_ROWS = 8;

export const SUCCESS_MESSAGE = (count: number, playTime: number) => `You found the code in ${count} attempt${count > 1 ? `s`: ``} and ${playTime} seconds`;
export const FAIL_MESSAGE = (count: number, playTime: number) => `You couldn't find the code in ${count} attempt${count > 1 ? `s` : ``} and ${playTime} seconds`;