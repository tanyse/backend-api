import { Prisma } from '@prisma/client';

export class Equipamento implements Prisma.EquipamentosUncheckedCreateInput {
  id?: number;
  descricao: string;
  valor_de_compra: number;
  data_compra: string | Date;
}
