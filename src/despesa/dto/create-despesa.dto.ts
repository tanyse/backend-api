import { IsNumber, IsString } from 'class-validator';
import { Despesa } from '../entities/despesa.entity';

export class CreateDespesaDto extends Despesa {
  id?: number;
  @IsNumber()
  valor: number;
  @IsString()
  descricao: string;
  @IsNumber()
  id_usuario: number;
  @IsNumber()
  id_tipo_despesa: number;
}
