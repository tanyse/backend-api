import { IsString } from 'class-validator';
import { Colaborador } from '../entities/colaborador.entity';
import { Prisma } from '@prisma/client';

export class CreateColaboradorDto extends Colaborador {
  id?: number;
  @IsString()
  nome: string;
  @IsString()
  data_nascimento: string;
  @IsString()
  telefone: string;
  @IsString()
  cpf: string;
  @IsString()
  genero: string;
  @IsString()
  cargo: string;
  @IsString()
  funcao: string;
  endereco?: Prisma.EnderecoUncheckedCreateNestedManyWithoutUsuarioInput;
}
