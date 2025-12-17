import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import type { RootState, AppDispatch } from "./store";

/**
 * A custom hook to use the Redux dispatch function with full TypeScript type safety.
 * It ensures that dispatch knows about all possible AppDispatch actions and thunks.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * A custom hook to select state from the Redux store with full TypeScript type safety.
 * It automatically knows the shape of the RootState, so you don't need to annotate
 * the state type in every component where you use a selector.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
