import { Module } from '@nestjs/common';
import { CheckImageService } from './check_image.service';
import { CheckImageController } from './check_image.controller';

@Module({
  controllers: [CheckImageController],
  providers: [CheckImageService],
})
export class CheckImageModule {}
