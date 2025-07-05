import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrumentoQuirurgicoService } from './instrumento-quirurgico.service';
import { InstrumentoQuirurgicoController } from './instrumento-quirurgico.controller';
import { InstrumentoQuirurgico } from './entities/instrumento-quirurgico.entity';
import { CategoriaInstrumento } from '../categoria-instrumento/entities/categoria-instrumento.entity';
import { Proveedor } from '../proveedor/entities/proveedor.entity';
import { UbicacionAlmacen } from '../ubicacion-almacen/entities/ubicacion-almacen.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InstrumentoQuirurgico,
      CategoriaInstrumento,
      Proveedor,
      UbicacionAlmacen,
    ]),
  ],
  controllers: [InstrumentoQuirurgicoController],
  providers: [InstrumentoQuirurgicoService],

  exports: [InstrumentoQuirurgicoService],
})
export class InstrumentoQuirurgicoModule {}
