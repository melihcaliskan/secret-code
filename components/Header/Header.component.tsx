/* eslint-disable @next/next/no-page-custom-font */

import { useContext } from "react";

import Head from "next/head";
import Title from "components/Title/Title.component";
import Pin from "components/Pin/Pin.component";
import styles from "styles/Header.module.scss";
import { IHeader } from "@/interfaces/IHeader.interface";
import { Box } from "@chakra-ui/react";
import { GameContext } from "@/store/Game.context";

export function Header(props: IHeader.IHeaderProps) {
  const [value, _] = useContext(GameContext);
  const { board, day, isFlipped } = value;
  // const isFlipped = true;

  const titleClasses = `${styles.container} ${!isFlipped ? styles.show : styles.hidden}`;
  const boardClasses = `${styles.container} ${isFlipped ? styles.show : styles.hidden}`;

  return (
    <Box
      position="relative"
      zIndex={2}
      mt={4}
      ml={4}
      mr={4}>
      <Head>
        <title>Secret Code</title>
        <meta name="description" content="Secret Code" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v13.0" nonce="3Ygh73Wp"></script>
        <div id="fb-root"></div>
      </Head>

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