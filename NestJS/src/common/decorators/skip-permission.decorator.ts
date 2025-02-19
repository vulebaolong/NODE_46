
import { SetMetadata } from '@nestjs/common';

export const SKIP_PERMISSION = 'skipPermission';
export const SkipPermission = () => SetMetadata(SKIP_PERMISSION, true);
