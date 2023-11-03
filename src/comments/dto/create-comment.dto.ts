import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  body: string;

  @IsInt()
  @ApiProperty()
  articleId: number;
}
