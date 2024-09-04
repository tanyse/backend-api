import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipamentosModule } from './equipamentos/equipamentos.module';

@Module({
  imports: [EquipamentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
