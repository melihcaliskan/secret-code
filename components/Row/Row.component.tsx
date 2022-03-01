import { useContext } from "react";
import Pin from "components/Pin/Pin.component";
import RowStatus from "components/RowStatus/RowStatus.component";
import { BOARD_SIZE } from "@/utility/constants";
import { GameContext } from "@/store/Game.context";
import { PinColor } from "@/enums/PinColor.enum";
import styles from "@/styles/Pin.module.scss";

export function Row(props) {
  const [value, _] = useContext(GameContext);
  const { board } = value;
  const { inputs } = props;

  return (
    <>
      <div className={styles.row}>
        <RowStatus
          board={board}
          inputs={inputs} />

        {[...Array(BOARD_SIZE)].map((e, columnIndex) =>
          <Pin
            board={board}
            key={columnIndex}
            index={columnIndex}
            color={PinColor[inputs[columnIndex]]}
          />
        )}
      </div>
    </>
  )
}

export default Row;