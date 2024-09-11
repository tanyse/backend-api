import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateEnderecoDto) {
    return this.prisma.endereco.create({ data });
  }

  findAll() {
    return this.prisma.endereco.findMany();
  }

  findOne(id: number) {
    return this.prisma.endereco.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateEnderecoDto) {
    return this.prisma.endereco.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.endereco.delete({
      where: { id },
    });
  }
}
