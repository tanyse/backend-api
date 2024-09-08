import { IsNumber, IsString } from 'class-validator';
import { Estoque } from '../entities/estoque.entity';

export class CreateEstoqueDto extends Estoque {
  id?: number;
  @IsString()
  equipamentos: string;
  @IsNumber()
  quantidade: number;
}
