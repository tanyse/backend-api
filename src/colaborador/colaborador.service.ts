import { Injectable } from '@nestjs/common';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColaboradorService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateColaboradorDto) {
    return this.prisma.colaborador.create({ data });
  }

  findAll() {
    return this.prisma.colaborador.findMany();
  }

  findOne(id: number) {
    return this.prisma.colaborador.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateColaboradorDto) {
    return this.prisma.colaborador.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.colaborador.delete({
      where: { id },
    });
  }
}
