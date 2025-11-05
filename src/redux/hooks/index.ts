import { weatherSlice } from "@/redux/slices/weatherSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const actions = {
  ...weatherSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
