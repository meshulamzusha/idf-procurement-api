import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CheckImageService } from './check_image.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('images/check')
export class CheckImageController {
  constructor(private readonly checkImageService: CheckImageService) {}

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  checkImage(@Param() id: number, @UploadedFile(
    new ParseFilePipe({
      validators: [
      new MaxFileSizeValidator({ maxSize: 250}),
      new FileTypeValidator({fileType: 'png'})
    ],
  })
  )
    
  image: Express.Multer.File) {
    
  }
}
