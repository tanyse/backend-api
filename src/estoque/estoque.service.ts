import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstoqueService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateEstoqueDto) {
    return this.prisma.estoque.create({ data });
  }

  findAll() {
    return this.prisma.estoque.findMany();
  }

  findOne(id: number) {
    return this.prisma.estoque.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateEstoqueDto) {
    return this.prisma.estoque.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.estoque.delete({
      where: { id },
    });
  }
}
