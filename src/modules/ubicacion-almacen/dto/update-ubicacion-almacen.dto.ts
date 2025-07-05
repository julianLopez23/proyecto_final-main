import { PartialType } from '@nestjs/mapped-types';
import { CreateUbicacionAlmacenDto } from './create-ubicacion-almacen.dto';

export class UpdateUbicacionAlmacenDto extends PartialType(
  CreateUbicacionAlmacenDto,
) {}
