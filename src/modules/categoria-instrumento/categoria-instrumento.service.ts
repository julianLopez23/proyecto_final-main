import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaInstrumento } from './entities/categoria-instrumento.entity';
import { CreateCategoriaInstrumentoDto } from './dto/create-categoria-instrumento.dto';
import { UpdateCategoriaInstrumentoDto } from './dto/update-categoria-instrumento.dto';

function isDatabaseError(error: any): error is { code: string } {
  return typeof error === 'object' && error !== null && 'code' in error;
}

@Injectable()
export class CategoriaInstrumentoService {
  constructor(
    @InjectRepository(CategoriaInstrumento)
    private readonly categoriaInstrumentoRepository: Repository<CategoriaInstrumento>,
  ) {}

  async create(
    createCategoriaInstrumentoDto: CreateCategoriaInstrumentoDto,
  ): Promise<CategoriaInstrumento> {
    const newCategoria = this.categoriaInstrumentoRepository.create(
      createCategoriaInstrumentoDto,
    );
    try {
      return await this.categoriaInstrumentoRepository.save(newCategoria);
    } catch (error: unknown) {
      if (isDatabaseError(error) && error.code === 'ER_DUP_ENTRY') {
        throw new HttpException(
          'Ya existe una categoría con este nombre.',
          HttpStatus.CONFLICT,
        );
      }

      throw new HttpException(
        'Error interno del servidor al crear la categoría.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<CategoriaInstrumento[]> {
    return await this.categoriaInstrumentoRepository.find();
  }

  async findOne(id: number): Promise<CategoriaInstrumento> {
    const categoria = await this.categoriaInstrumentoRepository.findOneBy({
      id,
    });
    if (!categoria) {
      throw new HttpException(
        `Categoría con ID ${id} no encontrada.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return categoria;
  }

  async update(
    id: number,
    updateCategoriaInstrumentoDto: UpdateCategoriaInstrumentoDto,
  ): Promise<CategoriaInstrumento> {
    const categoriaToUpdate =
      await this.categoriaInstrumentoRepository.findOneBy({
        id,
      });
    if (!categoriaToUpdate) {
      throw new HttpException(
        `Categoría con ID ${id} no encontrada para actualizar.`,
        HttpStatus.NOT_FOUND,
      );
    }
    Object.assign(categoriaToUpdate, updateCategoriaInstrumentoDto);
    try {
      return await this.categoriaInstrumentoRepository.save(categoriaToUpdate);
    } catch (error: unknown) {
      if (isDatabaseError(error) && error.code === 'ER_DUP_ENTRY') {
        throw new HttpException(
          'Ya existe una categoría con este nombre.',
          HttpStatus.CONFLICT,
        );
      }

      throw new HttpException(
        'Error interno del servidor al actualizar la categoría.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.categoriaInstrumentoRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(
        `Categoría con ID ${id} no encontrada para eliminar.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return true;
  }
}
