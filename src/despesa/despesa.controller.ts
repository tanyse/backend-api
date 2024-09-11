import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';

@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post('adicionar')
  create(@Body() createDespesaDto: CreateDespesaDto) {
    return this.despesaService.create(createDespesaDto);
  }

  @Get('listar')
  findAll() {
    return this.despesaService.findAll();
  }

  @Get('buscarId/:id')
  findOne(@Param('id') id: string) {
    return this.despesaService.findOne(+id);
  }

  @Patch('atualizar:id')
  update(@Param('id') id: string, @Body() updateDespesaDto: UpdateDespesaDto) {
    return this.despesaService.update(+id, updateDespesaDto);
  }

  @Delete('excluir/:id')
  remove(@Param('id') id: string) {
    return this.despesaService.remove(+id);
  }
}
