import { createLoader} from 'nuqs/server'
import { medicinesParams } from '@/features/medicines/params';

export const medicinesParamsLoader = createLoader(medicinesParams);