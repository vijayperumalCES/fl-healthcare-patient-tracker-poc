import { useQueryStates } from "nuqs";
import { doctorsParams } from "../params";

export function useDoctorsParams() {
  return useQueryStates(doctorsParams);
}
