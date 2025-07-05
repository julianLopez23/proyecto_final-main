// src/modules/instrumento-quirurgico/entities/instrumento-quirurgico.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CategoriaInstrumento } from '../../categoria-instrumento/entities/categoria-instrumento.entity';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';
import { UbicacionAlmacen } from '../../ubicacion-almacen/entities/ubicacion-almacen.entity';

@Entity('instrumentos_quirurgicos')
export class InstrumentoQuirurgico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 150 })
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  precioUnitario: number;

  @Column('int', { default: 0 })
  cantidadStock: number;

  @Column({ type: 'date', nullable: true })
  fechaAdquisicion: Date;

  @ManyToOne(
    () => CategoriaInstrumento,
    (categoria) => categoria.instrumentos,
    { eager: true, onDelete: 'SET NULL' },
  )
  @JoinColumn({ name: 'categoriaId' })
  categoria: CategoriaInstrumento | null;

  @Column({ nullable: true })
  categoriaId: number | null;

  @ManyToOne(
    () => Proveedor,

    (proveedor: Proveedor) => proveedor.instrumentos,
    {
      eager: true,
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({ name: 'proveedorId' })
  proveedor: Proveedor | null;

  @Column({ nullable: true })
  proveedorId: number | null;

  @ManyToOne(
    () => UbicacionAlmacen,

    (ubicacion: UbicacionAlmacen) => ubicacion.instrumentos,
    {
      eager: true,
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({ name: 'ubicacionId' })
  ubicacion: UbicacionAlmacen | null;

  @Column({ nullable: true })
  ubicacionId: number | null;
}
