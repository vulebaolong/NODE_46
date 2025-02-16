import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoTypeDto } from './create-video-type.dto';

export class UpdateVideoTypeDto extends PartialType(CreateVideoTypeDto) {}
