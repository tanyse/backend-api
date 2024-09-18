import { Prisma } from '@prisma/client';

export class Servico implements Prisma.ServicosUncheckedCreateInput {
  id?: number;
  servico: string;
  descricao:  string;
  equipamento: string;
  dtabertura: string | Date;
  dtfechamento?: string | Date;
  id_usuario?: number;
  id_Status: number;
}
