import { PinColor } from "@/enums/PinColor.enum";

export namespace IPin {
  export interface IPinProps {
    color?: PinColor | string;
    onClick?: (color: string) => void;
    size?: string;
  }
}