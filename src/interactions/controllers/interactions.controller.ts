import { Controller, Post } from '@nestjs/common';

@Controller('interactions')
export class InteractionsController {
  @Post('')
  interact() {
    console.log('interact');
    return 'hello world';
  }
}
