import { createLoader} from 'nuqs/server'
import { doctorsParams } from '@/features/doctors/params';

export const doctorsParamsLoader = createLoader(doctorsParams);