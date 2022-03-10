import { IPin } from "@/interfaces/IPin.interface";
import { Box } from "@chakra-ui/react";
import styles from "styles/Pin.module.scss"

export function Pin(props: IPin.IPinProps) {
  const { color = "gray" } = props;
  const size = props.size === "small" ? "16px" : "28px";
  
  return (
    <Box
      w={size}
      h={size}
      bg={color}
      borderRadius={32}
      className={styles.container}
      onClick={props?.onClick}
      style={{ ...props.style }} />
  )
}

export default Pin;