import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '@prisma/client';
import { ArticleEntity } from 'src/articles/entities/article.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export class CommentEntity implements Comment {
  constructor({ user, article, ...data }: Partial<CommentEntity>) {
    Object.assign(this, data);

    if (user) this.user = new UserEntity(user);
    if (article) this.article = new ArticleEntity(article);
  }

  @ApiProperty()
  id: number;
  @ApiProperty()
  body: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false, nullable: true })
  userId: number;

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity | null;

  @ApiProperty({ required: false, nullable: true })
  articleId: number;

  @ApiProperty({ required: false, type: ArticleEntity })
  article?: ArticleEntity | null;
}
