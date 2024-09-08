import { Module } from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { ServicosController } from './servicos.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ServicosController],
  providers: [ServicosService, PrismaService],
})
export class ServicosModule {}
