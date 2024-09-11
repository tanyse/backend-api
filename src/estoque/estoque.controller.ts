import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post('adicionar')
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  @Get('listar')
  findAll() {
    return this.estoqueService.findAll();
  }

  @Get('buscarId/:id')
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(+id);
  }

  @Patch('atualizar/:id')
  update(@Param('id') id: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }

  @Delete('excluir/:id')
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }
}
