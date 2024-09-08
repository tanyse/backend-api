import { IsString } from 'class-validator';
import { Colaborador } from '../entities/colaborador.entity';

export class CreateColaboradorDto extends Colaborador {
  id?: number;
  @IsString()
  nome: string;
}
