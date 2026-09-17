// typescript 기반
// useSelector(), useDispatch() => 타입 지정

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// 타입을 알아서 유추하도록 설정
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector = useSelector.withTypes<RootState>(); // Export a hook that can be reused to resolve types
