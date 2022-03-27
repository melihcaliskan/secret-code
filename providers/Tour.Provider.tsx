import { TourContext } from "@/store/Tour.context";
import { GameContext } from "store/Game.context";

export const TourProvider = (props): JSX.Element => {
  const { children, tour, setTour } = props;
  return (
    <TourContext.Provider value={[tour, setTour]}>
      {children}
    </TourContext.Provider>
  );
};
