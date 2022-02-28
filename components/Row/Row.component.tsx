import { useContext } from "react";
import Pin from "components/Pin/Pin.component";
import RowStatus from "components/RowStatus/RowStatus.component";
import { BOARD_SIZE } from "@/utility/constants";
import { GameContext } from "@/store/Game.context";

export function Row(props) {
  const [value, _] = useContext(GameContext);
  const { board } = value;
  const { inputs } = props;

  return (
    <>
      <div style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        marginBottom: 10,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 6,
      }}>
        <RowStatus
          board={board}
          inputs={inputs} />

        {[...Array(BOARD_SIZE)].map((e, columnIndex) =>
          <Pin
            board={board}
            key={columnIndex}
            index={columnIndex}
            color={inputs[columnIndex]}
          />
        )}
      </div>
    </>
  )
}

export default Row;