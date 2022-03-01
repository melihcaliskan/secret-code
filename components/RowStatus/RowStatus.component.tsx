/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react'
import Pin from 'components/Pin/Pin.component';
import { PinColor } from '@/enums/PinColor.enum';
import { GameContext } from '@/store/Game.context';
import { BOARD_SIZE } from '@/utility/constants';
import { getRowColors } from '@/utility/helpers';

export function RowStatus(props: any) {
  const [value, setValue]: any = useContext(GameContext);
  const [colors, setColors] = useState(getColors());
  const { inputs } = value;

  function getColors() {
    return getRowColors(value.board, props.inputs);
  }

  function checkIsSuccess(colors: Array<string>) {
    const isSuccess = colors.every(color => color === PinColor.YELLOW);
    
    if (isSuccess) {
      setValue({
        isSuccess: true,
        inputs: []
      })
    }
  }

  useEffect(() => {
    const colors = getColors();
    setColors(colors);
    checkIsSuccess(colors);
  }, [inputs]);

  return (
    <Box w="64px" display={"flex"}>
      {[...Array(BOARD_SIZE)].map((e, idx) =>
        <Pin
          key={idx}
          color={props.inputs.length === BOARD_SIZE ? colors[idx] : undefined}
          size={"small"}
          style={{ marginTop: idx % 2 === 0 ? 0 : "12px" }} />
      )}
    </Box>
  )
}

export default RowStatus;