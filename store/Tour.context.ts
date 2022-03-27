import { createContext } from "react";

export const TOUR_INITIAL_STATE = {
  stepsEnabled: false,
  initialStep: 0,
  steps: [
    {
      element: ".test",
      intro: "World step"
    }
  ],
  // hintsEnabled: true,
  // hints: [
  //   {
  //     element: ".chakra-stack",
  //     hint: "Hello hint",
  //     hintPosition: "middle-right"
  //   }
  // ]
}

export const TourContext = createContext(TOUR_INITIAL_STATE);
