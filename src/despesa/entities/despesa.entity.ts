import { Prisma } from '@prisma/client';

export class Despesa implements Prisma.DespesaUncheckedCreateInput {
  id?: number;
  valor: number;
  descricao: string;
  id_usuario: number;
  id_tipo_despesa: number;
}
