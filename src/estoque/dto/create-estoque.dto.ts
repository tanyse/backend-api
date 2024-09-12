import { IsNumber, IsString } from 'class-validator';
import { Estoque } from '../entities/estoque.entity';

export class CreateEstoqueDto extends Estoque {
  id?: number;
  @IsString()
  equipamento: string;
  @IsNumber()
  quantidade: number;
}
