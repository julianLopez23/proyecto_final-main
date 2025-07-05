// src/modules/categoria-instrumento/dto/update-categoria-instrumento.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaInstrumentoDto } from './create-categoria-instrumento.dto';

export class UpdateCategoriaInstrumentoDto extends PartialType(
  CreateCategoriaInstrumentoDto,
) {}
