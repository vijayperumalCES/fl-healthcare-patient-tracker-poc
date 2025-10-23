import { createLoader} from 'nuqs/server'
import { patientsParams } from '@/features/patients/params';

export const patientsParamsLoader = createLoader(patientsParams);