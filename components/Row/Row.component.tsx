import { useContext } from "react";
import Pin from "components/Pin/Pin.component";
import RowStatus from "components/RowStatus/RowStatus.component";
import { BOARD_SIZE } from "@/utility/constants";
import { GameContext } from "@/store/Game.context";
import { PinColor } from "@/enums/PinColor.enum";
import styles from "@/styles/Pin.module.scss";
import { Box } from "@chakra-ui/react";

export function Row(props) {
  const [value, setValue] = useContext(GameContext);
  const { board, selectedPin } = value;
  const { active, slicedInputs, rowIndex } = props;

  function handleClick(idx) {
    if (active) {
      setValue({
        selectedPin: {
          row: rowIndex,
          column: idx
        }
      });
    }
  }

  function renderPin(idx) {
    return (
      <Pin
        board={board}
        key={idx}
        index={idx}
        color={PinColor[slicedInputs[idx]]}
        onClick={() => handleClick(idx)}
      />
    )
  }

  return (
    <>
      <div style={{ background: props.active ? "rgba(0,0,0,0.05)" : "transparent" }} className={styles.row}>
        <RowStatus
          rowIndex={rowIndex}
          board={board}
          slicedInputs={slicedInputs} />

        {[...Array(BOARD_SIZE)].map((e, idx) => {
          const isSelected = selectedPin && selectedPin.row === rowIndex && selectedPin.column === idx;
          if (isSelected) {
            return (
              <Box key={idx} style={{ borderRadius: 99, background: "aquamarine" }}>
                {renderPin(idx)}
              </Box>
            )
          }

          return renderPin(idx)
        })}
      </div>
    </>
  )
}

export default Row;