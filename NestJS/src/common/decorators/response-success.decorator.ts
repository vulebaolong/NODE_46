
import { SetMetadata } from '@nestjs/common';

export const RES_SUCCESS = 'resSuccess';
export const ResponseSuccess = (mes: string) => SetMetadata(RES_SUCCESS, mes);
