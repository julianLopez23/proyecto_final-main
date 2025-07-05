// src/modules/proveedor/entities/proveedor.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InstrumentoQuirurgico } from '../../instrumento-quirurgico/entities/instrumento-quirurgico.entity'; // <-- ¡VERIFICA ESTA RUTA Y NOMBRE DE ARCHIVO!

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ unique: true, length: 100 })
  contacto: string; // Ej: email o teléfono principal

  @Column({ nullable: true, length: 255 })
  direccion: string;

  @OneToMany(
    () => InstrumentoQuirurgico,

    (instrumento: InstrumentoQuirurgico) => instrumento.proveedor,
  )
  instrumentos: InstrumentoQuirurgico[];
}
