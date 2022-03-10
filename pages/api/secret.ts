import { boards } from "@/utility/boards";
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const INITIAL_DATE = new Date("2022-03-01");
const TODAY = new Date();
TODAY.setUTCHours(TODAY.getUTCHours() + 3);

const dateDiff = Math.floor((TODAY.getTime() - INITIAL_DATE.getTime()) / _MS_PER_DAY);

export default function handler(req: any, res: any) {
  res.status(200).json({
    day: dateDiff + 1,
    board: boards[dateDiff],
    debug: {
      INITIAL_DATE,
      TODAY,
      dateDiff,
    }
  })
}
