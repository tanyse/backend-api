import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicosService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateServicoDto) {
    return this.prisma.servicos.create({ data });
  }

  findAll() {
    return this.prisma.servicos.findMany();
  }

  findOne(id: number) {
    return this.prisma.servicos.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateServicoDto) {
    return this.prisma.servicos.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.servicos.delete({
      where: { id },
    });
  }
}
