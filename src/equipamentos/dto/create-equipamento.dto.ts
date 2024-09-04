import { Prisma } from '@prisma/client';

export class CreateEquipamentoDto implements Prisma.EquipamentosCreateInput {
  descricao: string;
  servico?: Prisma.ServicosCreateNestedOneWithoutEquipamentosInput;
}
