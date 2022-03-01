import { PinColor } from "@/enums/PinColor.enum";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

export function enumToArray(arg: object) {
  return arg && Object.keys(arg).map((key) => key);
}

export function getRandomColor() {
  const arr = enumToArray(PinColor);
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getTomorrow() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setHours(0);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);

  return tomorrow.setDate(tomorrow.getDate() + 1)
}

export function getPlayTime(d1: number) {
  const date1 = dayjs(d1);
  const date2 = dayjs();

  return date2.diff(date1) / 1000;
}

export function compareTwoArrays(a1: Array<any>, a2: Array<any>) {
  return a1.reduce((a, c) => a + a2.includes(c), 0);
}

export function shuffleArray(array: Array<any>) {
  let temp = array;
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
  }

  return temp;
}

export function getRowColors(board: Array<any>, inputs: Array<any>) {
  const colors = board.map((i, idx) => i === inputs[idx] ? PinColor.YELLOW : PinColor.RED);
  return colors;
}