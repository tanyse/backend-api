import { Equipamento } from '../entities/equipamento.entity';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateEquipamentoDto extends Equipamento {
  @IsString()
  descricao: string;
  @IsNumber()
  valor_de_compra: number;
  @IsDateString()
  data_compra: string | Date;
}
