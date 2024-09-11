import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { EstoqueModule } from './estoque/estoque.module';
import { DespesaModule } from './despesa/despesa.module';
import { ServicosModule } from './servicos/servicos.module';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    EquipamentosModule,
    EstoqueModule,
    DespesaModule,
    ServicosModule,
    ColaboradorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
