/* eslint-disable @next/next/no-page-custom-font */

import { useContext } from "react";

import Title from "components/Title/Title.component";
import Pin from "components/Pin/Pin.component";
import styles from "styles/Header.module.scss";
import { IHeader } from "@/interfaces/IHeader.interface";
import { Box } from "@chakra-ui/react";
import { GameContext } from "@/store/Game.context";

export function Header(props: IHeader.IHeaderProps) {
  const [value, _] = useContext(GameContext);
  const { board, day, isFlipped } = value;

  const titleClasses = `${styles.container} ${!isFlipped ? styles.show : styles.hidden}`;
  const boardClasses = `${styles.container} ${isFlipped ? styles.show : styles.hidden}`;

  return (
    <Box
      position="relative"
      zIndex={2}
      mt={4}
      ml={4}
      mr={4}>
      <div className={styles.headerAttachments} />

      <div
        className={titleClasses}>
        <Title day={day} />
      </div>
      <div className={boardClasses}>
        <Box w="64px" />
        {board?.map((color, idx) =>
          <Pin
            key={idx}
            color={color} />
        )}
      </div>
    </Box>
  )
}

export default Header;