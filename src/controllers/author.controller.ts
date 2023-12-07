import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { AuthorUseCases } from '../use-cases/author/author.use-case';
import { CreateAuthorDto, UpdateAuthorDto } from 'src/core/dtos/author.dto';

@Controller('api/author')
export class AuthorController {
  constructor(private authorUseCases: AuthorUseCases) {}

  @Get()
  async getAll() {
    return this.authorUseCases.getAllAuthors();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.authorUseCases.getAuthorById(id);
  }

  @Post()
  createAuthor(@Body() authorDto: CreateAuthorDto) {
    return this.authorUseCases.createAuthor(authorDto);
  }

  @Put(':id')
  updateAuthor(
    @Param('id') authorId: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorUseCases.updateAuthor(authorId, updateAuthorDto);
  }
}