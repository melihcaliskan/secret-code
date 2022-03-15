import { IPin } from "@/interfaces/IPin.interface";
import { Box } from "@chakra-ui/react";
import styles from "styles/Pin.module.scss"

export function Pin(props: IPin.IPinProps) {
  const { color = "gray" } = props;

  return (
    <Box
      w={props.size}
      h={props.size}
      bg={color}
      borderRadius={32}
      className={styles.container}
      onClick={props?.onClick}
      style={{ ...props.style }} />
  )
}

export default Pin;