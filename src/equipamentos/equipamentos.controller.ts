import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EquipamentosService } from './equipamentos.service';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';

@Controller('equipamentos')
export class EquipamentosController {
  constructor(private readonly equipamentosService: EquipamentosService) {}

  @Post('adicionar')
  create(@Body() createEquipamentoDto: CreateEquipamentoDto) {
    return this.equipamentosService.create(createEquipamentoDto);
  }

  @Get('listar')
  findAll() {
    return this.equipamentosService.findAll();
  }

  @Get('buscarId/:id')
  findOne(@Param('id') id: string) {
    return this.equipamentosService.findOne(+id);
  }

  @Patch('atualizar/:id')
  update(
    @Param('id') id: string,
    @Body() updateEquipamentoDto: UpdateEquipamentoDto,
  ) {
    return this.equipamentosService.update(+id, updateEquipamentoDto);
  }

  @Delete('excluir/:id')
  remove(@Param('id') id: string) {
    return this.equipamentosService.remove(+id);
  }
}
