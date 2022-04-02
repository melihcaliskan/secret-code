/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react'
import { PinColor } from '@/enums/PinColor.enum';
import { GameContext } from '@/store/Game.context';
import { BOARD_SIZE } from '@/utility/constants';
import { getRowColors } from '@/utility/helpers';

export function Indicator(props) {
  const { active, className, count, color, opacity } = props;

  return (
    <Box
      w="28px"
      h="28px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      opacity={opacity || 1}
      borderRadius={3}
      backgroundColor={color}
      className={active ? className : ""}>
      <Text color="white">
        {count}
      </Text>
    </Box>
  )
}

export function RowStatus(props: any) {
  const { slicedInputs, rowIndex } = props;
  const [value, setValue]: any = useContext(GameContext);
  const [colors, setColors] = useState([]);

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

  const active = value.activeBoardIndex === 0 || value.activeBoardIndex === rowIndex + 1;
  return (
    <Stack w="72px" direction="row" alignItems="center" spacing="3">
      {value.activeBoardIndex > rowIndex ?
        <>
          <Indicator
            active={active}
            count={colors.filter(c => c === PinColor.GREEN)?.length}
            color="#218c74"
            className="first-step" />

          <Indicator
            active={active}
            count={colors.filter(c => c === PinColor.YELLOW)?.length}
            color="#cc8e35"
            className="second-step" />
        </>
        :
        ["first-step", "second-step"].map((c, i) =>
          <Indicator
            key={i}
            active={active}
            color="#84817a"
            opacity={0.2}
            className={c} />
        )
      }
    </Stack>
  )
}

export default RowStatus;