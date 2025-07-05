import { PartialType } from '@nestjs/mapped-types';
import { CreateInstrumentoQuirurgicoDto } from './create-instrumento-quirurgico.dto';

export class UpdateInstrumentoQuirurgicoDto extends PartialType(
  CreateInstrumentoQuirurgicoDto,
) {}
