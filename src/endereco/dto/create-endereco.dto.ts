import { IsNumber, IsString } from 'class-validator';
import { Endereco } from '../entities/endereco.entity';

export class CreateEnderecoDto extends Endereco {
  id?: number;
  @IsString()
  endereco: string;
  @IsNumber()
  numero: number;
  @IsString()
  bairro: string;
  @IsString()
  cidade: string;
  @IsString()
  estado: string;
  @IsString()
  cep: string;
  @IsNumber()
  id_usuario: number;
}
