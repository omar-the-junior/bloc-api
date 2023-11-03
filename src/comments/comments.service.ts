import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  create(createCommentDto: CreateCommentDto, userId: number) {
    const { articleId, body } = createCommentDto;

    return this.prisma.comment.create({
      data: {
        body,
        userId,
        articleId,
      },
      include: {
        article: true,
        user: true,
      },
    });
  }

  findAll() {
    return this.prisma.comment.findMany({
      include: {
        article: true,
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({
      where: { id },
      include: {
        article: true,
        user: true,
      },
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  // TODO: add authorization to this method
  // TODO: only allow the author of the comment to delete it
  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
