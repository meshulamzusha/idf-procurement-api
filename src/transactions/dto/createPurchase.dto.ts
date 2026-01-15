import { Type } from "class-transformer"
import { IsArray, IsDefined, IsNotEmpty, IsNumber, IsString, Min, ValidateNested } from "class-validator"

export class Purchase {
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    id: number

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    name: string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    type: string

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    quantity: number

    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    pricePerUnit: number
}

export class CreatePurchaseDtoArray {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Purchase)
  purchases: Purchase[];
}