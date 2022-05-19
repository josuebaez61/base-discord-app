import { Module } from '@nestjs/common';
import { InteractionsController } from './controllers';

@Module({
  controllers: [InteractionsController],
})
export class InteractionsModule {}
