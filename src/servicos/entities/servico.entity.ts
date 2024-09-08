import { Prisma } from '@prisma/client';

export class Servico implements Prisma.ServicosUncheckedCreateInput {
  id?: number;
  servico: string;
  id_usuario?: number;
}
