import { IsNumber, IsString } from 'class-validator';
import { Servico } from '../entities/servico.entity';

export class CreateServicoDto extends Servico {
  id?: number;
  @IsString()
  servico: string;
  @IsNumber()
  id_usuario?: number;
}
