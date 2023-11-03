import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from '@prisma/client';
import { CommentEntity } from './entities/comment.entity';

@Controller('comments')
@ApiTags('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CommentEntity })
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @Req() req: Request,
  ) {
    const user = req.user as User;
    const comment = await this.commentsService.create(
      createCommentDto,
      user.id,
    );
    return new CommentEntity(comment);
  }

  @Get()
  @ApiOkResponse({ type: CommentEntity, isArray: true })
  async findAll() {
    const comments = await this.commentsService.findAll();

    return comments.map((comment) => new CommentEntity(comment));
  }

  @Get(':id')
  @ApiOkResponse({ type: CommentEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const comment = await this.commentsService.findOne(id);
    return new CommentEntity(comment);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CommentEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    const comment = await this.commentsService.update(id, updateCommentDto);
    return new CommentEntity(comment);
  }

  // TODO: add authorization to this route
  // TODO: only allow the author of the comment to delete it
  @Delete(':id')
  @ApiOkResponse({ type: CommentEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const comment = await this.commentsService.remove(id);
    return new CommentEntity(comment);
  }
}
