import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Purchase, CreatePurchaseDtoArray } from './dto/createPurchase.dto';
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('purchase')
  create(@Body() dto: CreatePurchaseDtoArray) {
    return this.transactionsService.create(dto.purchases)
  }
}
