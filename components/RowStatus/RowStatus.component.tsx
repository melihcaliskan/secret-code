/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react'
import Pin from 'components/Pin/Pin.component';
import { PinColor } from '@/enums/PinColor.enum';
import { GameContext } from '@/store/Game.context';
import { BOARD_SIZE } from '@/utility/constants';
import { getRowColors } from '@/utility/helpers';

export function RowStatus(props: any) {
  const { slicedInputs, rowIndex } = props;
  const [value, setValue]: any = useContext(GameContext);
  const [colors, setColors] = useState([]);
  const [localInputs, setLocalInputs] = useState(slicedInputs);

  function getColors() {
    return getRowColors(value.board, slicedInputs);
  }

  function checkIsSuccess(colors: Array<string>) {
    const isSuccess = colors.every(color => color === PinColor.GREEN);

    if (isSuccess) {
      setValue({
        isSuccess: true,
      })
    }
  }

  useEffect(() => {
    if (slicedInputs.length === BOARD_SIZE && !colors.length) {
      const colors = getColors();
      setValue({ rowColors: [...value.rowColors, ...colors] })
      setColors(colors);
      checkIsSuccess(colors);
    }
  }, [slicedInputs]);

  return (
    <Box w="72px" display={"flex"}>
      {[...Array(BOARD_SIZE)].map((e, idx) =>
        <Pin
          key={idx}
          color={slicedInputs.length === BOARD_SIZE ? colors[idx] : undefined}
          size={"small"}
          style={{ marginTop: idx % 2 === 0 ? 0 : "12px" }} />
      )}
    </Box>
  )
}

export default RowStatus;