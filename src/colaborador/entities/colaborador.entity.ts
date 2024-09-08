import { Prisma } from '@prisma/client';

export class Colaborador implements Prisma.ColaboradorUncheckedCreateInput {
  id?: number;
  nome: string;
}
