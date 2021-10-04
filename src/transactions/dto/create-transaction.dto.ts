import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsISO8601,
  IsIn,
} from 'class-validator';
import {
  TransactionCategory,
  TransactionCategoryList,
  TransactionType,
  TransactionTypeList,
} from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(400)
  description: string;

  @IsNotEmpty()
  @IsISO8601()
  payment_date: string;

  @IsNotEmpty()
  amount: number;

  @IsIn(TransactionTypeList)
  @IsNotEmpty()
  type: TransactionType;

  @IsIn(TransactionCategoryList)
  @IsNotEmpty()
  category: TransactionCategory;
}
