import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { CheckImageModule } from './check_image/check_image.module';

@Module({
  imports: [TransactionsModule, CheckImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
