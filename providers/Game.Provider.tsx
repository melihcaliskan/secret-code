import { GameContext } from "store/Game.context";

export const GameProvider = (props): JSX.Element => {
  const { children, value, setValue } = props;
  return (
    <GameContext.Provider value={[value, setValue]}>
      {children}
    </GameContext.Provider>
  );
};
