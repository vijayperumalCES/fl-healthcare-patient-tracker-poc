
import { useQueryStates } from "nuqs";
import { patientsParams } from "../params";

export function usePatientsParams() {
  return useQueryStates(patientsParams);
}
