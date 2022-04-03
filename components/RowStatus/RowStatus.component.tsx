/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { PinColor } from '@/enums/PinColor.enum';
import { GameContext } from '@/store/Game.context';
import { BOARD_SIZE, POPOVER_TEXTS } from '@/utility/constants';
import { getRowColors } from '@/utility/helpers';
import { Popover } from '../Popover/Popover.component';

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
  const { inputs, popoverIndex } = value;
  const [colors, setColors] = useState([]);
  const active = value.activeBoardIndex === 0 || value.activeBoardIndex === rowIndex + 1;

  const text = popoverIndex == 2 ? POPOVER_TEXTS[2] : POPOVER_TEXTS[3];
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

  function greenIndicator() {
    return (
      <Stack>
        <Indicator
          onClick={() => setValue({
            popoverIndex: 2
          })}
          active={active}
          count={colors.filter(c => c === PinColor.GREEN)?.length}
          color="#218c74"
          className="first-step" />
      </Stack>
    )
  }

  function yellowIndicator() {
    return (
      <Stack>
        <Indicator
          onClick={() => setValue({
            popoverIndex: 3
          })}
          active={active}
          count={colors.filter(c => c === PinColor.YELLOW)?.length}
          color="#cc8e35"
          className="second-step" />
      </Stack>
    )
  }

  // TODO
  function clearCurrentRow() {
    const tempInputs = inputs.slice(0, -(inputs.length % BOARD_SIZE));
    setValue({
      inputs: tempInputs,
    });
  }

  function renderEmptyRow() {
    // If one or more input exists in row.
    const isCurrent = rowIndex == value.activeBoardIndex;
    const hasInput = inputs[rowIndex * BOARD_SIZE];
    if (isCurrent && hasInput) {
      return (
        <Box
          onClick={clearCurrentRow}
          w="68px"
          h="28px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          borderRadius={3}
          backgroundColor={"#394a74"}>
          <DeleteIcon
            w={4}
            h={4}
            color="red.400" />
        </Box>
      )
    }

    return (
      ["first-step", "second-step"].map((c, i) =>
        <Indicator
          key={i}
          active={active}
          color="#84817a"
          opacity={0.2}
          className={c} />
      )
    )
  }

  return (
    <Stack w="72px" direction="row" alignItems="center" spacing="3">
      {value.activeBoardIndex > rowIndex ?
        value.activeBoardIndex === 1 ?
          <>
            <Popover
              placement="bottom"
              text={text}
              isOpen={popoverIndex == 2}>
              {yellowIndicator()}
            </Popover>
            <Popover
              placement="bottom"
              text={text}
              isOpen={popoverIndex == 3}>
              {greenIndicator()}
            </Popover>
          </>
          :
          <>
            {greenIndicator()}
            {yellowIndicator()}
          </>
        :
        renderEmptyRow()
      }
    </Stack>
  )
}

export default RowStatus;