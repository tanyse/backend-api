import { Prisma } from '@prisma/client';

export class Colaborador implements Prisma.ColaboradorUncheckedCreateInput {
  id?: number;
  nome: string;
  data_nascimento: string;
  telefone: string;
  cpf: string;
  genero: string;
  endereco?: Prisma.EnderecoUncheckedCreateNestedManyWithoutUsuarioInput;
}
