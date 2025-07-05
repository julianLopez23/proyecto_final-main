import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { InstrumentoQuirurgicoModule } from './modules/instrumento-quirurgico/instrumento-quirurgico.module';
import { CategoriaInstrumentoModule } from './modules/categoria-instrumento/categoria-instrumento.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { UbicacionAlmacenModule } from './modules/ubicacion-almacen/ubicacion-almacen.module';

import { InstrumentoQuirurgico } from './modules/instrumento-quirurgico/entities/instrumento-quirurgico.entity';
import { CategoriaInstrumento } from './modules/categoria-instrumento/entities/categoria-instrumento.entity';
import { Proveedor } from './modules/proveedor/entities/proveedor.entity';
import { UbicacionAlmacen } from './modules/ubicacion-almacen/entities/ubicacion-almacen.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [
          InstrumentoQuirurgico,
          CategoriaInstrumento,
          Proveedor,
          UbicacionAlmacen,
        ],
        synchronize: true,
        logging: false,
      }),
      inject: [ConfigService],
    }),

    InstrumentoQuirurgicoModule,
    CategoriaInstrumentoModule,
    ProveedorModule,
    UbicacionAlmacenModule,
  ],
})
export class AppModule {}
