import { ConflictException, Injectable } from '@nestjs/common';
import { Purchase } from './dto/createPurchase.dto';
import { PrismaService } from 'src/prisma.service';
import * as budgetIo from '../budget/fsBudgetFile'

@Injectable()
export class TransactionsService {
    constructor(private readonly prisma: PrismaService) { }
    async create(dto: Purchase[]) {
        const budget = await budgetIo.getBudget();
        const totalCost = this.TotalTransactionsCost(dto);

        if (totalCost > budget) {
            throw new ConflictException("There is not enough budget for this transaction.")
        }

        await budgetIo.updateBudget(budget - totalCost)

        return {
            results: dto.map(item => this.handleSingleItem(item))
        }
    }

    private TotalTransactionsCost(purchase: Purchase[]) {
        return purchase.reduce((total, purchase) => {
            const cost = purchase.quantity * purchase.pricePerUnit;
            return total + cost
        },0)
    }

    private async handleSingleItem(item: Purchase) {
        const upsertItem = await this.prisma.item.upsert({
            where: {
                id: item.id,
            },
            update: {
                quantity: {increment: item.quantity},
            },
            create: {
                name: item.name,
                type: item.type,
                quantity: item.quantity,
                pricePerUnit: item.pricePerUnit
            },
        })

        return upsertItem
    }
}
