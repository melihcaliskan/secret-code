import { PinColor } from "@/enums/PinColor.enum";

export namespace IHome {
  export interface IHomeProps {
    board: Array<PinColor | string>;
  }
}