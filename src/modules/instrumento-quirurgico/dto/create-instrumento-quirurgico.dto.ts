import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInstrumentoQuirurgicoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del instrumento no puede estar vacío.' })
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber({}, { message: 'El precio unitario debe ser un número.' })
  @Min(0, { message: 'El precio unitario no puede ser negativo.' })
  @Type(() => Number)
  precioUnitario: number;

  @IsNumber({}, { message: 'La cantidad en stock debe ser un número entero.' })
  @Min(0, { message: 'La cantidad en stock no puede ser negativa.' })
  @Type(() => Number)
  cantidadStock: number;

  @IsDateString(
    {},
    {
      message:
        'La fecha de adquisición debe ser una fecha válida (YYYY-MM-DD).',
    },
  )
  @IsOptional()
  fechaAdquisicion?: string;

  @IsNumber({}, { message: 'El ID de categoría debe ser un número.' })
  @IsOptional()
  @Type(() => Number)
  categoriaId?: number;

  @IsNumber({}, { message: 'El ID de proveedor debe ser un número.' })
  @IsOptional()
  @Type(() => Number)
  proveedorId?: number;

  @IsNumber({}, { message: 'El ID de ubicación debe ser un número.' })
  @IsOptional()
  @Type(() => Number)
  ubicacionId?: number;
}
