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
    return this.prisma.equipamentos.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateEquipamentoDto) {
    return this.prisma.equipamentos.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.equipamentos.delete({
      where: { id },
    });
  }
}
