import { boards } from "@/utility/boards";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
const TZ = "Europe/Istanbul";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(TZ);

const INITIAL_DATE = dayjs("2022-03-01");
const TODAY = dayjs().utc(true);

const dateDiff = TODAY.diff(INITIAL_DATE, "days");
console.log("Dates:", INITIAL_DATE, TODAY, dateDiff);

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
