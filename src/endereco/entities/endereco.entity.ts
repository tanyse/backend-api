import { Prisma } from '@prisma/client';

export class Endereco implements Prisma.EnderecoUncheckedCreateInput {
  id?: number;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  id_usuario: number;
}
