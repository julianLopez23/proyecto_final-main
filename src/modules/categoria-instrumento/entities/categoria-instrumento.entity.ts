import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InstrumentoQuirurgico } from '../../instrumento-quirurgico/entities/instrumento-quirurgico.entity';

@Entity('categorias_instrumento')
export class CategoriaInstrumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @OneToMany(
    () => InstrumentoQuirurgico,
    (instrumento) => instrumento.categoria,
  )
  instrumentos: InstrumentoQuirurgico[];
}
