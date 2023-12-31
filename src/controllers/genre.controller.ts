import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { GenreUseCases } from '../use-cases/genre/genre.use-case';
import { CreateGenreDto, UpdateGenreDto } from 'src/core/dtos/genre.dto';

@Controller('api/genre')
export class GenreController {
  constructor(private genreUseCases: GenreUseCases) {}

  @Get()
  async getAll() {
    return this.genreUseCases.getAllGenres();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.genreUseCases.getGenreById(id);
  }

  @Post()
  createGenre(@Body() genreDto: CreateGenreDto) {
    return this.genreUseCases.createGenre(genreDto);
  }

  @Put(':id')
  updateGenre(
    @Param('id') genreId: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    return this.genreUseCases.updateGenre(genreId, updateGenreDto);
  }
}
