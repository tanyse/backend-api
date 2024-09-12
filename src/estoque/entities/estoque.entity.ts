import { Prisma } from '@prisma/client';

export class Estoque implements Prisma.EstoqueUncheckedCreateInput {
  id?: number;
  equipamento: string;
  quantidade: number;
}
