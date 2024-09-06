import { Injectable } from '@nestjs/common';
import { CreateEquipamentoDto } from './dto/create-equipamento.dto';
import { UpdateEquipamentoDto } from './dto/update-equipamento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipamentosService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateEquipamentoDto) {
    return this.prisma.equipamentos.create({ data });
  }

  findAll() {
    return this.prisma.equipamentos.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} equipamento`;
  }

  update(id: number, updateEquipamentoDto: UpdateEquipamentoDto) {
    return `This action updates a #${id} equipamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipamento`;
  }
}
