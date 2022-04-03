/* eslint-disable @next/next/no-page-custom-font */

import { useContext, useEffect, useState } from "react";

import Title from "components/Title/Title.component";
import Pin from "components/Pin/Pin.component";
import styles from "styles/Header.module.scss";
import { IHeader } from "@/interfaces/IHeader.interface";
import { Box } from "@chakra-ui/react";
import { GameContext } from "@/store/Game.context";
import { Popover } from "../Popover/Popover.component";
import useStorage from '@/utility/useStorage';
import { POPOVER_TEXTS } from "@/utility/constants";

export function Header(props: IHeader.IHeaderProps) {
  const { getItem, setItem } = useStorage();
  const [value, _] = useContext(GameContext);
  const [isCompleted, setIsCompleted] = useState(getItem("isTourCompleted"))
  const { board, day, isFlipped, popoverIndex } = value;

  const titleClasses = `${styles.container} ${!isFlipped ? styles.show : styles.hidden}`;
  const boardClasses = `${styles.container} ${isFlipped ? styles.show : styles.hidden}`;

  useEffect(() => {
    if (!isCompleted) {
      setItem("isTourCompleted", JSON.stringify(true));
    }
  }, [isCompleted]);


  function content() {
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
          <Box w="72px" />
          {isFlipped && board?.map((color, idx) =>
            <Pin
              key={idx}
              color={color}
              size={"28px"} />
          )}
        </div>
      </Box>
    )
  }

  return (
    <Popover
      text={POPOVER_TEXTS[0]}
      isOpen={!isCompleted && popoverIndex === 0}>
      {content()}
    </Popover>
  )
}

export default Header;