import { boards } from "@/utility/boards";
import dayjs from "dayjs";

const INITIAL_DATE = dayjs("2022-03-01");
const TODAY = dayjs();

const difference = TODAY.diff(INITIAL_DATE, "days");

export default function handler(req: any, res: any) {
  res.status(200).json({
    day: difference + 1,
    board: boards[difference]
  })
}
