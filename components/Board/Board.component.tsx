import Row from "components/Row/Row.component";
import styles from "styles/Board.module.scss";
import { BOARD_ROWS, BOARD_SIZE } from "@/utility/constants";
import { useContext } from "react";
import { GameContext } from "@/store/Game.context";

export function Board(props) {
  const [value, setValue] = useContext(GameContext);
  const { board } = value;
  const { activeBoardIndex } = props;

  if (!board || !board?.length) {
    return null;
  }

  return (
    <div className={styles.board}>
      {[...Array(BOARD_ROWS)].map((e, i) => {
        const start = i * BOARD_SIZE;
        const end = (i + 1) * BOARD_SIZE;
        const slicedInputs = value.inputs.slice(start, end);
        return (
          <Row
            active={activeBoardIndex === i}
            key={i}
            rowIndex={i}
            inputs={slicedInputs} />
        )
      })}
    </div>
  )
}

export default Board;