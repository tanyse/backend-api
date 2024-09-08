import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DespesaService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDespesaDto) {
    return this.prisma.despesa.create({ data });
  }

  findAll() {
    return this.prisma.despesa.findMany();
  }

  findOne(id: number) {
    return this.prisma.despesa.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateDespesaDto) {
    return this.prisma.despesa.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.despesa.delete({
      where: { id },
    });
  }
}
