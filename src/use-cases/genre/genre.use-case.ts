import { Injectable } from '@nestjs/common';
import { GenreFactoryService } from './genre-factory.service';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import Genre from 'src/core/entities/genre.entity';
import { CreateGenreDto, UpdateGenreDto } from 'src/core/dtos/genre.dto';

@Injectable()
export class GenreUseCases {
  constructor(
    private dataServices: IDataServices,
    private genreFactoryService: GenreFactoryService,
  ) {}

  getAllGenres(): Promise<Genre[]> {
    return this.dataServices.genres.getAll();
  }

  getGenreById(id: any): Promise<Genre> {
    return this.dataServices.genres.get(id);
  }

  createGenre(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre = this.genreFactoryService.createNewGenre(createGenreDto);
    return this.dataServices.genres.create(genre);
  }

  updateGenre(genreId: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const genre = this.genreFactoryService.updateGenre(updateGenreDto);
    return this.dataServices.genres.update(genreId, genre);
  }
}
