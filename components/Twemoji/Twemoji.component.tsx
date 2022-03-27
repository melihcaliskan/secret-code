// @ts-nocheck

import React, { memo } from 'react';
import twemoji from 'twemoji';
import styles from "styles/Home.module.scss"

export const Twemoji = (props) => {
  const { emoji, size } = props;

  return (
    <span
      className={styles.emoji}
      style={{ fontSize: size }}
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, {
          folder: 'svg',
          ext: '.svg'
        })
      }}
    />
  )
}

export default memo(Twemoji);