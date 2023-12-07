import { Injectable } from '@nestjs/common';
import { CreateGenreDto, UpdateGenreDto } from 'src/core/dtos/genre.dto';
import Genre from 'src/core/entities/genre.entity';

@Injectable()
export class GenreFactoryService {
  createNewGenre(createGenreDto: CreateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = createGenreDto.name;

    return newGenre;
  }

  updateGenre(updateGenreDto: UpdateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = updateGenreDto.name;

    return newGenre;
  }
}
