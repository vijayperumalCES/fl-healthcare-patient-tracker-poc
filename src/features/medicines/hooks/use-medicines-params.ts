import { useQueryStates } from "nuqs";
import { medicinesParams } from "../params";

export function useMedicinesParams() {
  return useQueryStates(medicinesParams);
}
